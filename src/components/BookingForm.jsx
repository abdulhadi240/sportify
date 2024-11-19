"use client";
import React, { useState } from "react";
import { fakeApiData } from "./data"; // Adjust the import path as necessary

const BookingForm = () => {
  const [selectedCourt, setSelectedCourt] = useState(fakeApiData.courts[0].id);
  const [selectedDate, setSelectedDate] = useState(fakeApiData.dates[0]);
  const [selectedStartSlot, setSelectedStartSlot] = useState(null);
  const [selectedEndSlot, setSelectedEndSlot] = useState(null);

  const handleSlotClick = (slot) => {
    if (!slot.available) return;

    if (!selectedStartSlot || (selectedStartSlot && selectedEndSlot)) {
      setSelectedStartSlot(slot.time);
      setSelectedEndSlot(null);
    } else if (selectedStartSlot && !selectedEndSlot) {
      setSelectedEndSlot(slot.time);
    }
  };

  const isSlotSelected = (slotTime) => {
    if (!selectedStartSlot || !selectedEndSlot) return false;

    const startIndex = fakeApiData.slots.findIndex(
      (slot) => slot.time === selectedStartSlot
    );
    const endIndex = fakeApiData.slots.findIndex(
      (slot) => slot.time === selectedEndSlot
    );

    if (startIndex === -1 || endIndex === -1 || startIndex > endIndex) return false;

    const selectedSlots = fakeApiData.slots.slice(startIndex, endIndex + 1);
    return selectedSlots.some(
      (slot) => slot.time === slotTime && slot.available
    );
  };

  const calculateTotalPrice = () => {
    if (!selectedStartSlot || !selectedEndSlot) return 0;

    const startIndex = fakeApiData.slots.findIndex(
      (slot) => slot.time === selectedStartSlot
    );
    const endIndex = fakeApiData.slots.findIndex(
      (slot) => slot.time === selectedEndSlot
    );

    if (startIndex === -1 || endIndex === -1 || startIndex > endIndex) return 0;

    const selectedSlots = fakeApiData.slots.slice(startIndex, endIndex + 1);
    const availableSlots = selectedSlots.filter((slot) => slot.available);

    return availableSlots.length * fakeApiData.slotPrice;
  };

  const sortedSlots = [...fakeApiData.slots].sort((a, b) => {
    return a.available === b.available ? 0 : a.available ? 1 : -1;
  });

  return (
    <div className="max-w-6xl p-2 mx-auto">
      {/* Header */}
      <h1 className="flex justify-center mb-6 text-5xl font-bold">
        Booking Form
      </h1>

      {/* Courts */}
      <div className="mb-4">
        <h2 className="mb-2 text-2xl font-bold">Courts</h2>
        <div className="flex gap-4">
          {fakeApiData.courts.map((court) => (
            <button
              key={court.id}
              onClick={() => setSelectedCourt(court.id)}
              className={`px-4 text-sm py-2 rounded-full ${
                selectedCourt === court.id
                  ? "bg-primary text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              {court.name}
            </button>
          ))}
        </div>
      </div>

      {/* Select Date */}
      <div className="my-8">
        <h2 className="mb-2 text-sm font-bold">Select Date</h2>
        <div className="flex gap-4 overflow-x-auto scrollbar-hide scroll-snap-x">
          {fakeApiData.dates.map((date) => (
            <button
              key={date.id}
              onClick={() => setSelectedDate(date)}
              className={`flex-shrink-0 scroll-snap-align-start flex flex-col justify-between items-center py-2 h-[150px] w-[calc(100%/9.7)] rounded-lg text-center ${
                selectedDate.id === date.id
                  ? "bg-primary text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              <div className="text-sm font-medium">{date.month}</div>
              <div className="text-4xl font-bold">{date.date}</div>
              <div className="text-sm font-medium">{date.day}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Available Slots */}
      <div className="my-8">
        <h2 className="mb-2 text-base font-bold">Available Slots</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {sortedSlots.map((slot, index) => (
            <button
              key={index}
              onClick={() => handleSlotClick(slot)}
              className={`px-4 py-2 rounded-full ${
                selectedStartSlot === slot.time || selectedEndSlot === slot.time
                  ? "bg-primary text-white"
                  : isSlotSelected(slot.time)
                  ? "bg-primary text-white"
                  : slot.available
                  ? "bg-gray-200 text-black"
                  : "bg-gray-400 text-white cursor-not-allowed"
              }`}
              disabled={!slot.available}
            >
              {slot.time}
            </button>
          ))}
        </div>
      </div>

      {/* Booking Details */}
      <div className="flex items-center justify-between p-4 mb-4 bg-gray-100 rounded-lg">
        <div>
          <h3 className="text-lg font-medium">Total Amount</h3>
          <p>
            From: {selectedStartSlot || "--:--"} To:{" "}
            {selectedEndSlot || "--:--"}
          </p>
        </div>
        <p className="text-lg font-bold">Rs: {fakeApiData.slotPrice}</p>
      </div>

      {/* Total Price */}
      <div className="mt-4">
        <h2 className="mb-2 text-lg font-medium">Total Price</h2>
        <div className="text-xl font-bold">${calculateTotalPrice()}</div>
      </div>

      {/* Book Now */}
      <button
        disabled={!selectedStartSlot}
        className={`w-full py-2 rounded-lg ${
          selectedStartSlot
            ? "bg-primary text-white"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
      >
        Book Now
      </button>
    </div>
  );
};

export default BookingForm;
