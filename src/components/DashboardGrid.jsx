import React, { useState } from 'react';
import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

const DashboardGrid = () => {
  const [blocks, setBlocks] = useState([]);
  const [layout, setLayout] = useState([]);

  // Function to generate a new block with default settings
  const createNewBlock = () => {
    const blockId = `block-${blocks.length + 1}`;
    const newBlock = {
      i: blockId,
      x: (blocks.length * 3) % 12, // Start at the next column, wrap around if needed
      y: Infinity, // Place at the bottom of the grid
      w: 3, // Default width (3 columns)
      h: 2, // Default height (2 rows)
      minW: 2,
      minH: 2,
      maxW: 6,
      maxH: 6,
    };
    setBlocks([...blocks, newBlock]);
    setLayout([...layout, newBlock]);
  };

  // Function to handle layout changes (when blocks are moved/resized)
  const handleLayoutChange = (newLayout) => {
    setLayout(newLayout);
  };

  // Function to render the content of each block
  const renderBlockContent = (blockId) => (
    <div className="draggable-handle">
      <h3>{blockId}</h3>
      <p>Drag and resize this block</p>
    </div>
  );

  return (
    <div className="grid-container">
      <button onClick={createNewBlock} className="add-block-btn">
        + Add New Block
      </button>
      <GridLayout
        className="layout"
        layout={layout}
        cols={12}
        rowHeight={100}
        width={window.innerWidth - 40}
        margin={[20, 20]}
        draggableHandle=".draggable-handle"
        preventCollision={true}
        compactType="vertical"
        onLayoutChange={handleLayoutChange}
      >
        {layout.map((block) => (
          <div key={block.i} data-grid={block}>
            {renderBlockContent(block.i)}
          </div>
        ))}
      </GridLayout>
    </div>
  );
};

export default DashboardGrid;