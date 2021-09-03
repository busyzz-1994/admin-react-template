/*
 * @Author: busyzz
 * @Date: 2021-09-03 14:59:01
 * @Description:
 */
import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import {
  getItems,
  reorder,
  getItemStyleInHorizontal,
  getListStyleInHorizontal,
} from '../utils';

const Horizontal = () => {
  const [list, setList] = useState(() => getItems(30));
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
      <Droppable droppableId='droppable' direction='horizontal'>
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={getListStyleInHorizontal(snapshot.isDraggingOver)}
          >
            {list.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={getItemStyleInHorizontal(
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

export default Horizontal;
