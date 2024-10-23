import { Box, Modal } from "@mui/material";
import React, { useState } from "react";
import { MdDragIndicator } from "react-icons/md";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { IoCloseCircleOutline } from "react-icons/io5";

const ChangeOrder = ({
  orderModal,
  handleOrderModal,
  cardData,
  setCardData,
}) => {
  const [sectionState, setSectionState] = useState([
    { name: "Banner", id: "1" },
    { name: "Venue", id: "2" },
    { name: "Bridal Party", id: "3" },
    { name: "Accomodation", id: "4" },
    { name: "Places we love", id: "5" },
    { name: "RSVP", id: "6" },
    { name: "FAQ'S", id: "7" },
    { name: "Contact us", id: "8" },
    { name: "Wedding registry", id: "9" },
  ]);
  let sections = [
    "Banner",
    "Details",
    "Venue",
    "Bridal Party",
    "Accomodation",
    "Places we love",
    "RSVP",
    "FAQ'S",
    "Itinerary",
    "Contact us",
    "Wedding registry",
  ];


    const handleDragEnd = (result) => {
      if (!result.destination) {
        return; // Exit if there's no valid destination
      }
    
      // Copy the order array to prevent mutating the original state
      const updatedItems = Array.from(cardData?.order || [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
    
      // Remove the item from the source position
      const [movedItem] = updatedItems.splice(result.source.index, 1);
    
      // Insert it at the destination position
      updatedItems.splice(result.destination.index, 0, movedItem);
    
      // Check if the item was somehow replaced by 0, and correct it
      if (updatedItems.includes(0)) {
        const index = updatedItems.indexOf(0);
        updatedItems[index] = 11; // Replace 0 with 11 in case of an issue
      }
    
      // Save the updated order back to the state
      setCardData({ ...cardData, order: updatedItems });
    };
  let screenWidth=window.innerWidth
  console.log(cardData)
  return (
    <Modal open={orderModal} onClose={handleOrderModal}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: screenWidth > 440 ? 440 : "90%",
          height: "92vh",
          bgcolor: "background.paper",
          boxShadow: 24,
          borderRadius: 2,
          outline:"none",
        }}
      >
        <div className="w-[100%] text-center  font-500 sm:text-xl mt-6 ">
          Drag the boxes to rearrange the sections
          <IoCloseCircleOutline onClick={handleOrderModal} className="absolute right-2 top-1 text-[25px] cursor-pointer"/>
        </div>

        <div className="w-[100%] flex justify-center mt-2 h-[85%]">
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="droppable">
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="w-[85%] h-[100%] flex flex-col justify-between items-center"
                >
                  {cardData?.order?.map((elm, index) => (
                    <Draggable
                      key={elm} // Use a unique key, preferably the id
                      draggableId={elm.toString()} // Ensure draggableId is a string
                      index={index}
                    >
                      {(provided) => (
                        <div
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                          className=" w-[95%] h-[9%] border bg-[#4C6156] text-white flex justify-center items-center relative"
                        >
                          <MdDragIndicator className="text-xl absolute left-2" />
                          {sections[elm - 1]}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>

          {/* {sectionState?.map((elm) => {
              return (
                <div className="w-[95%] h-[10%] border bg-[#4C6156] text-white flex justify-center items-center relative">
                  <MdDragIndicator className="text-xl absolute left-2" />
                  {elm?.name}
                </div>
              );
            })} */}
        </div>
      </Box>
    </Modal>
  );
};

export default ChangeOrder;
