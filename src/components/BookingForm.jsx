"use client";
import React, { useMemo, useState } from "react";
import { fakeApiData } from "./data"; // Adjust the import path as necessary
import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";
import { GoClock } from "react-icons/go";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const BookingForm = () => {
  const searchParams = useSearchParams();
  const selectedCourt = searchParams.get("court") || fakeApiData.courts[0].id;
  const selectedDate =
    searchParams.get("date") ||
    `${fakeApiData.dates[0].date}-${fakeApiData.dates[0].month}-${fakeApiData.dates[0].year}`;
  const [selectedStartSlot, setSelectedStartSlot] = useState(null);
  const [selectedEndSlot, setSelectedEndSlot] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const selectedCourtName = useMemo(() => {
    const court = fakeApiData.courts.find((court) => court.id === selectedCourt);
    return court ? court.name : "Futsal Court";
  }, [selectedCourt]);

  const handleStartSlotClick = (slot) => {
    if (slot.available) {
      setSelectedStartSlot(slot.time);
      setIsModalOpen(true); // Open modal to select the end time
    }
  };

  const handleEndSlotClick = (range) => {
    setSelectedEndSlot(range.endTime); // Set the selected end time
    setIsModalOpen(false); // Close the modal
  };

  const filterEndRanges = useMemo(() => {
    if (!selectedStartSlot) return [];

    const startIndex = fakeApiData.slots.findIndex(
      (slot) => slot.time === selectedStartSlot
    );

    // Start index should always exist because we validate when selecting
    if (startIndex === -1) return [];

    const ranges = [];
    let currentStart = selectedStartSlot;
    let currentEndIndex = startIndex + 2; // Start with 1 hour (2 x 30-minute slots)

    while (currentEndIndex <= fakeApiData.slots.length) {
      const currentSlot = fakeApiData.slots[currentEndIndex - 1];
      const previousSlot = fakeApiData.slots[currentEndIndex - 2];

      // Break loop if any required slot in the range is unavailable
      if (!currentSlot?.available || !previousSlot?.available) break;

      ranges.push({
        startTime: currentStart,
        endTime: currentSlot.time,
      });

      currentEndIndex++; // Increment by one slot (30 minutes)
    }

    return ranges;
  }, [selectedStartSlot, fakeApiData.slots]);

  const selectedHours = useMemo(() => {
    const startTime = selectedStartSlot;
    const endTime = selectedEndSlot;

    if (!startTime || !endTime) return 0;

    const startIndex = fakeApiData.slots.findIndex(
      (slot) => slot.time === startTime
    );
    const endIndex = fakeApiData.slots.findIndex(
      (slot) => slot.time === endTime
    );

    if (startIndex === -1 || endIndex === -1 || startIndex > endIndex) return 0;

    const selectedSlots = fakeApiData.slots.slice(startIndex, endIndex + 1);
    const availableSlots = selectedSlots.filter((slot) => slot.available);

    const totalHours = availableSlots.length * 0.5; // Each slot represents 0.5 hours

    return totalHours < 1 ? 1 : totalHours; // Ensure minimum of 1 hour
  }, [selectedStartSlot, selectedEndSlot]);

  const totalPrice = useMemo(() => {
    return selectedHours * fakeApiData.slotPrice;
  }, [selectedHours]);

  return (
    <div className="max-w-6xl p-2 mx-auto">
      <h1 className="flex justify-center mb-6 text-5xl font-bold">
        Booking Form
      </h1>

      {/* Courts */}
      <div className="mb-4">
        <h2 className="mb-2 text-2xl font-bold">Courts</h2>
        <div className="flex gap-4">
          {fakeApiData.courts.map((court) => (
            <Link
              href={`/booking?court=${court.id}&date=${selectedDate}`}
              scroll={false}
              key={court.id}
              className={`px-4 text-sm py-2 rounded-full ${
                selectedCourt === court.id.toString()
                  ? "bg-primary1 text-white"
                  : "bg-white text-black border-[1px] border-[#6E3B95]"
              }`}
            >
              {court.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Select Date */}
      <div className="my-8">
        <h2 className="mb-2 text-sm font-bold">Select Date</h2>
        <div className="flex gap-4 overflow-x-auto scrollbar-hidden sm:scrollbar-none scroll-snap-x">
          {fakeApiData.dates.map((date) => (
            <Link
              href={`/booking?court=${selectedCourt}&date=${date.date}-${date.month}-${date.year}`}
              scroll={false}
              key={date.id}
              className={`flex-shrink-0 scroll-snap-align-start flex flex-col justify-between items-center py-2 h-[150px] w-[calc(100%/9.7)] rounded-lg text-center ${
                selectedDate === `${date.date}-${date.month}-${date.year}`
                  ? "bg-primary1 text-white"
                  : "bg-white text-black border-[1px] border-[#6E3B95]"
              }`}
            >
              <div className="text-sm font-medium">{date.month}</div>
              <div className="text-4xl font-bold">{date.date}</div>
              <div className="text-sm font-medium">{date.day}</div>
            </Link>
          ))}
        </div>
      </div>

      {/* Available Slots */}
      <div className="my-8">
        <h2 className="mb-2 text-base font-bold">Available Slots</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {fakeApiData.slots.map((slot, index) => (
            <button
              key={`slot-${index}`} // Ensure unique keys
              onClick={() => handleStartSlotClick(slot)}
              className={`px-4 py-2 rounded-full ${
                selectedStartSlot === slot.time
                  ? "bg-primary1 text-white"
                  : slot.available
                  ? "bg-white text-black border-[1px] border-[#6E3B95]"
                  : "bg-[#8c8c8c] text-white cursor-not-allowed"
              }`}
              disabled={!slot.available}
            >
              {slot.time}
            </button>
          ))}
        </div>
      </div>

      {/* Slot Details */}
      <div className="flex justify-center gap-32 mb-10 h-auto">
        <div className="flex flex-col justify-between p-4 mb-4 bg-[#f7f4f9] h-[250px] rounded-lg">
          <h3 className="text-2xl font-bold">Slot Details</h3>
          <div className="bg-white p-2 w-[400px] h-[100px]">
            <div className="flex justify-center">
              <h1>{selectedDate}</h1>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col">
                From:
                <p>{selectedStartSlot || "--:--"}</p>
              </div>
              <div className="flex flex-col">
                To:
                <p>{selectedEndSlot || "--:--"}</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <p className="text-base font-black text-primary1">
              Rs: {totalPrice}
            </p>
            <AlertDialog>
              <AlertDialogTrigger
                disabled={!selectedStartSlot || !selectedEndSlot}
                className={`px-6 py-2 rounded-full ${
                  selectedStartSlot && selectedEndSlot
                    ? "bg-primary1 text-white"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                Book Now
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Booking Confirmation</AlertDialogTitle>
                  <AlertDialogDescription>
                    <div className="flex flex-col gap-4">
                      <div className="flex justify-between border-b-[1px]">
                        <h1>Game</h1>
                        <h1>{selectedCourtName}</h1>
                      </div>
                      <div className="flex justify-between border-b-[1px]">
                        <h1>Date</h1>
                        <h1>{selectedDate}</h1>
                      </div>
                      <div className="flex justify-between border-b-[1px]">
                        <h1>Time</h1>
                        <h1>
                          {selectedStartSlot} - {selectedEndSlot}
                        </h1>
                      </div>
                      <div className="flex justify-between border-b-[1px]">
                        <h1>Total Hours</h1>
                        <h1>{selectedHours.toFixed(2)} hours</h1>
                      </div>
                      <div className="flex justify-between border-b-[1px]">
                        <h1>Amount per hour</h1>
                        <h1>Rs {fakeApiData.slotPrice}</h1>
                      </div>
                      <div className="flex justify-between border-b-[1px]">
                        <h1>Total Amount</h1>
                        <h1>Rs {totalPrice.toFixed(2)}</h1>
                      </div>
                    </div>
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <Link href={"/confirmation"}>
                    <AlertDialogAction className="bg-primary1 hover:bg-primary1/70">
                      Confirm Booking
                    </AlertDialogAction>
                  </Link>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
        <div className="flex flex-col gap-2 border-[1px] p-3 rounded-xl">
          <h1 className="font-bold text-xl tracking-wide">{selectedCourtName}</h1>
          <Image
            src={"/ground.png"}
            width={400}
            height={400}
            alt="ground"
            className="rounded-lg"
          />
          <p className="flex gap-2 items-center text-xs text-black/60">
            <span className="text-primary1">
              <CiLocationOn />
            </span>
            Kashmir road, jail chorangi, Karachi, Pakistan
          </p>
          <p className="flex gap-2 items-center text-xs text-black/60">
            <span className="text-primary1">
              <GoClock />
            </span>
            05:00AM to 10:30PM
          </p>
        </div>
      </div>

      {/* Modal for Selecting End Slot */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg max-w-md w-full">
            <h2 className="text-lg font-bold mb-4">Select End Time</h2>
            <div className="flex flex-wrap gap-3">
              {filterEndRanges.map((range, index) => (
                <button
                  key={`end-range-${index}`}
                  onClick={() => handleEndSlotClick(range)}
                  className="px-4 py-2 rounded-full bg-white text-black border-[1px] border-[#6E3B95]"
                >
                  {range.startTime} - {range.endTime}
                </button>
              ))}
            </div>
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingForm;
