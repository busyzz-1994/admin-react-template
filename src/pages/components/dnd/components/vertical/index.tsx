/*
 * @Author: busyzz
 * @Date: 2021-09-03 14:39:58
 * @Description:
 */
import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { getItems, reorder, getItemStyle, getListStyle } from '../utils';

const Vertical = () => {
  const [list, setList] = useState(() => getItems(5));
  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    const newList = reorder(
      list,
      result.source.index,
      result.destination.index
    );
    setList(newList);
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId='droppable'>
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}
          >
            {list.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={getItemStyle(
                      snapshot.isDragging,
                      provided.draggableProps.style
                    )}
                  >
                    {item.content}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Vertical;
