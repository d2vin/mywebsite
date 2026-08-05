import React, { useRef, useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const colors = [
  '#000000', '#808080', '#800000', '#808000', '#008000', '#008080', '#000080',
  '#800080', '#808040', '#004040', '#0080FF', '#004080', '#8000FF', '#804000',
  '#FFFFFF', '#C0C0C0', '#FF0000', '#FFFF00', '#00FF00', '#00FFFF', '#0000FF',
  '#FF00FF', '#FFFF80', '#00FF80', '#80FFFF', '#8080FF', '#FF0080', '#FF8040',
];

type Tool = 'brush' | 'eraser';

export default function Paint() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const historyRef = useRef<string[]>([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState('#000000');
  const [tool, setTool] = useState<Tool>('brush');
  const [minimized, setMinimized] = useState(false);
  const [maximized, setMaximized] = useState(false);
  const [open, setOpen] = useState(true);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);

  const fillCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (!canvas || !context) return;
    context.fillStyle = '#FFFFFF';
    context.fillRect(0, 0, canvas.width, canvas.height);
  };

  useEffect(fillCanvas, []);

  const saveSnapshot = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    historyRef.current = [...historyRef.current.slice(-19), canvas.toDataURL()];
  };

  const undo = () => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    const snapshot = historyRef.current.pop();
    if (!canvas || !context || !snapshot) return;
    const image = new Image();
    image.onload = () => { context.clearRect(0, 0, canvas.width, canvas.height); context.drawImage(image, 0, 0); };
    image.src = snapshot;
  };

  const clearCanvas = () => { saveSnapshot(); fillCanvas(); };

  const download = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement('a');
    link.download = 'devin-paint.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  const getPoint = (event: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    const clientX = 'clientX' in event ? event.clientX : event.touches[0].clientX;
    const clientY = 'clientY' in event ? event.clientY : event.touches[0].clientY;
    return { x: (clientX - rect.left) * (canvas.width / rect.width), y: (clientY - rect.top) * (canvas.height / rect.height) };
  };

  const startDrawing = (event: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const context = canvasRef.current?.getContext('2d');
    if (!context) return;
    saveSnapshot();
    const { x, y } = getPoint(event);
    context.beginPath();
    context.moveTo(x, y);
    setIsDrawing(true);
  };

  const draw = (event: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    event.preventDefault();
    const context = canvasRef.current?.getContext('2d');
    if (!context) return;
    const { x, y } = getPoint(event);
    context.lineTo(x, y);
    context.strokeStyle = tool === 'eraser' ? '#FFFFFF' : color;
    context.lineWidth = tool === 'eraser' ? 36 : 5;
    context.lineCap = 'round';
    context.lineJoin = 'round';
    context.stroke();
  };

  const startDragging = (event: React.MouseEvent<HTMLDivElement>) => {
    if (maximized || window.innerWidth < 761) return;
    setDragging(true);
    setPosition({ x: event.clientX - (containerRef.current?.offsetLeft || 0), y: event.clientY - (containerRef.current?.offsetTop || 0) });
  };

  const onDrag = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!dragging || !containerRef.current) return;
    containerRef.current.style.left = `${event.clientX - position.x}px`;
    containerRef.current.style.top = `${event.clientY - position.y}px`;
  };

  const toggleMaximize = () => {
    if (containerRef.current) { containerRef.current.style.left = ''; containerRef.current.style.top = ''; }
    setMaximized((value) => !value);
    setMinimized(false);
  };

  if (!open) {
    return <section className="paint-stage paint-stage-closed"><button className="paint-reopen" onClick={() => setOpen(true)}>Open Paint</button></section>;
  }

  return (
    <section className="paint-stage" aria-label="Interactive paint canvas">
      <div ref={containerRef} className={`paint-window ${maximized ? 'paint-window-maximized' : ''} ${minimized ? 'paint-window-minimized' : ''}`}>
        <div className="paint-titlebar" onMouseDown={startDragging} onMouseMove={onDrag} onMouseUp={() => setDragging(false)} onMouseLeave={() => setDragging(false)}>
          <span>untitled - Paint</span>
          <div className="paint-window-controls" onMouseDown={(event) => event.stopPropagation()}>
            <button onClick={() => setMinimized((value) => !value)} aria-label={minimized ? 'Restore Paint' : 'Minimize Paint'} title={minimized ? 'Restore' : 'Minimize'}>_</button>
            <button onClick={toggleMaximize} aria-label={maximized ? 'Restore Paint window' : 'Maximize Paint window'} title={maximized ? 'Restore' : 'Maximize'}>{maximized ? '❐' : '□'}</button>
            <button onClick={() => setOpen(false)} aria-label="Close Paint" title="Close">×</button>
          </div>
        </div>

        {!minimized && <>
          <div className="paint-menu" role="toolbar" aria-label="File and editing actions">
            <button onClick={download} title="Download your drawing as a PNG">Save</button>
            <button onClick={undo} disabled={!historyRef.current.length} title="Undo the last stroke">Undo</button>
            <button onClick={clearCanvas} title="Clear the canvas">Clear</button>
          </div>
          <div className="paint-workspace">
            <div className="paint-tools" role="toolbar" aria-label="Drawing tools">
              <Button variant="ghost" className={tool === 'brush' ? 'paint-tool-active' : ''} onClick={() => setTool('brush')} aria-label="Brush tool" title="Brush">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 12l-8-8-6 6c-2 2-2 5 0 7s5 2 7 0l7-7"/><path d="M17 7l3 3"/></svg>
              </Button>
              <Button variant="ghost" className={tool === 'eraser' ? 'paint-tool-active' : ''} onClick={() => setTool('eraser')} aria-label="Eraser tool" title="Eraser">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 20H7L3 16C2 15 2 13 3 12L13 2L22 11L20 20Z"/><path d="M17 17L7 7"/></svg>
              </Button>
            </div>
            <div className="paint-canvas-wrap">
              <canvas ref={canvasRef} width={600} height={600} aria-label="Drawing canvas" onMouseDown={startDrawing} onMouseMove={draw} onMouseUp={() => setIsDrawing(false)} onMouseOut={() => setIsDrawing(false)} onTouchStart={startDrawing} onTouchMove={draw} onTouchEnd={() => setIsDrawing(false)} />
            </div>
          </div>
          <div className="paint-palette" aria-label="Color palette">
            {colors.map((swatch) => <button key={swatch} className={color === swatch ? 'paint-swatch-active' : ''} style={{ backgroundColor: swatch }} onClick={() => { setColor(swatch); setTool('brush'); }} aria-label={`Use color ${swatch}`} title={swatch} />)}
          </div>
          <div className="paint-status"><span>{tool === 'brush' ? `Brush · ${color}` : 'Eraser'}</span><span>600 × 600</span></div>
        </>}
      </div>
    </section>
  );
}
