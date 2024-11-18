import { DatePickerProvider } from "@/context/DatePickerContext";
import DatePicker from "@/components/DatePicker";

export default function Home() {
  return (
   <DatePickerProvider >


    <div className="min-h-screen bg-gradient-to-br from-violet-400 to-pink-200 flex flex-col gap-5 items-center justify-center">
    <h1 className="text-4xl font-semibold text-center">Date Picker</h1>
        <DatePicker />
      </div>



   </DatePickerProvider>
  );
}
