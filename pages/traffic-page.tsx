import React from "react";
import { createMachine } from "xstate";
import { useMachine } from "@xstate/react";

type TrafficLightEvent =
  | { type: "NEXT" }
  | { type: "TURN_ON" }
  | { type: "TURN_OFF" };

type TrafficLightState =
  | { value: { ON: "green" }; context: undefined }
  | { value: { ON: "yellow" }; context: undefined }
  | { value: { ON: "red" }; context: undefined }
  | { value: "OFF"; context: undefined };

const trafficLightMachine = createMachine<
  undefined,
  TrafficLightEvent,
  TrafficLightState
>({
  id: "trafficLight",
  initial: "OFF",
  states: {
    ON: {
      on: { TURN_OFF: "OFF" },
      initial: "red",
      states: {
        green: {
          on: { NEXT: "yellow" },
          after: {
            3500: "yellow",
          },
        },
        yellow: {
          on: { NEXT: "red" },
          after: {
            1500: "red",
          },
        },
        red: {
          on: { NEXT: "green" },
          after: {
            5000: "green",
          },
        },
      },
    },
    OFF: {
      on: { TURN_ON: "ON" },
    },
  },
});

const TrafficPage = () => {
  const [current, send] = useMachine(trafficLightMachine);
  return (
    <section>
      <div className="h-full-screen flex justify-center items-center py-10">
        <div className="pole" />
        <div className="border rounded-2xl bg-black bg-opacity-80 flex flex-col items-center p-2.5">
          <div
            className={`w-12 h-12 rounded-full mb-2.5 bg-red-500  ${
              current.matches({ ON: "red" }) ? "opacity-100" : "opacity-20"
            } `}
          ></div>

          <div
            className={`w-12 h-12 rounded-full mb-2.5 bg-yellow-400  ${
              current.matches({ ON: "yellow" }) ? "opacity-100" : "opacity-20"
            } `}
          ></div>

          <div
            className={`w-12 h-12 rounded-full mb-2.5 bg-green-600  ${
              current.matches({ ON: "green" }) ? "opacity-100" : "opacity-20"
            } `}
          ></div>
        </div>
      </div>
      <div className="flex flex-row justify-center space-x-2">
        <button
          onClick={() => send("NEXT")}
          className="bg-gray-700 text-white hover:bg-gray-900 rounded p-1.5 mt-2 text-sm"
        >
          NEXT
        </button>
        <button
          onClick={() => send("TURN_ON")}
          className="bg-gray-700 text-white hover:bg-gray-900 rounded p-1 mt-2 text-sm"
        >
          TURN ON
        </button>
        <button
          onClick={() => send("TURN_OFF")}
          className="bg-gray-700 text-white hover:bg-gray-900 rounded p-1 mt-2 text-sm"
        >
          TURN OFF
        </button>
      </div>
    </section>
  );
};

export default TrafficPage;
