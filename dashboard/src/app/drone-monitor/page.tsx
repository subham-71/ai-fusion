import Link from "next/link"
import { CardContent, Card, CardTitle, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="grid min-h-screen items-start gap-4 px-4 md:items-center md:px-10 lg:gap-8">
      <div className="flex items-center gap-4">
        <Link className="flex items-center gap-2 font-semibold" href="#">
          <Package2Icon className="h-6 w-6" />
          <span className="">MediLift</span>
        </Link>
        <h1 className="text-2xl font-semibold">Drone Delivery</h1>
      </div>
      <div className="grid gap-4">
        <Card>
          <CardContent className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <MapIcon className="h-6 w-6" />
              <div className="text-sm">
                <p className="font-semibold">Destination</p>
                <p>Remote Clinic, XYZ Region</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <CalendarIcon className="h-6 w-6" />
              <div className="text-sm">
                <p className="font-semibold">Scheduled</p>
                <p>Today, 14:00</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Drone Status</CardTitle>
            <CheckCircleIcon className="w-6 h-6 text-green-500" />
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <CompassIcon className="h-6 w-6" />
              <div className="text-sm">
                <p className="font-semibold">Location</p>
                <p>Coordinates: 42.3601° N, 71.0589° W</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <BatteryIcon className="h-6 w-6" />
              <div className="text-sm">
                <p className="font-semibold">Battery Level</p>
                <p>87%</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <ClockIcon className="h-6 w-6" />
              <div className="text-sm">
                <p className="font-semibold">Estimated Arrival</p>
                <p>15:30</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Live Video Feed</CardTitle>
            <Button className="rounded-full" size="icon" variant="outline">
              <VideoOffIcon className="w-4 h-4" />
              <span className="sr-only">Toggle video</span>
            </Button>
          </CardHeader>
          <CardContent className="flex justify-center p-8">
            <img
              alt="Video feed"
              className="aspect-video rounded-lg object-cover"
              height="225"
              src="/placeholder.svg"
              width="400"
            />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Mission Log</CardTitle>
            <Button className="rounded-full" size="icon" variant="outline">
              <RefreshCwIcon className="w-4 h-4" />
              <span className="sr-only">Refresh</span>
            </Button>
          </CardHeader>
          <CardContent className="p-0">
            <div className="grid gap-2 text-xs">
              <div className="flex items-center gap-2 p-2 rounded-lg bg-gray-100 dark:bg-gray-800">
                <ClockIcon className="w-4 h-4" />
                <span className="font-medium">14:02</span>
                <span>Departed from base</span>
                <ChevronRightIcon className="ml-auto w-4 h-4" />
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-gray-100 dark:bg-gray-800">
                <ClockIcon className="w-4 h-4" />
                <span className="font-medium">14:10</span>
                <span>Entered restricted airspace</span>
                <ChevronRightIcon className="ml-auto w-4 h-4" />
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-gray-100 dark:bg-gray-800">
                <ClockIcon className="w-4 h-4" />
                <span className="font-medium">14:20</span>
                <span>Arrived at destination</span>
                <ChevronRightIcon className="ml-auto w-4 h-4" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function BatteryIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="16" height="10" x="2" y="7" rx="2" ry="2" />
      <line x1="22" x2="22" y1="11" y2="13" />
    </svg>
  )
}


function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  )
}


function CheckCircleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  )
}


function ChevronRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}


function ClockIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}


function CompassIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>
  )
}


function MapIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
      <line x1="9" x2="9" y1="3" y2="18" />
      <line x1="15" x2="15" y1="6" y2="21" />
    </svg>
  )
}


function Package2Icon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  )
}


function RefreshCwIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
      <path d="M8 16H3v5" />
    </svg>
  )
}


function VideoOffIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10.66 6H14a2 2 0 0 1 2 2v2.34l1 1L22 8v8" />
      <path d="M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2l10 10Z" />
      <line x1="2" x2="22" y1="2" y2="22" />
    </svg>
  )
}
