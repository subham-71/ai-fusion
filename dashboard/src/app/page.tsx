import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container flex items-center justify-between h-16 px-4 sm:px-6">
          <nav className="hidden md:flex items-center space-x-4 text-sm font-medium tracking-wide text-gray-300">
            <Link className="text-gray-50 hover:text-gray-50/75" href="/admin">
              Admin
            </Link>
            <Link className="text-gray-50 hover:text-gray-50/75" href="/drone-monitor">
              Drone Operator
            </Link>
            <Link className="text-gray-50 hover:text-gray-50/75" href="/ngo-page">
              NGO
            </Link>
            <Link className="text-gray-50 hover:text-gray-50/75" href="/help">
              Help
            </Link>
          </nav>
          <Link
            className="flex items-center space-x-2 font-bold text-gray-50 md:space-x-3 hover:text-gray-50/75"
            href="#"
          >
            <DropletIcon className="w-6 h-6 md:w-8 md:h-8" />
            Medilift
          </Link>
          <div className="flex items-center space-x-4">
            <Link className="inline-flex items-center space-x-2 text-gray-300 hover:text-gray-50/75" href="#">
              <UserIcon className="w-4 h-4" />
              <span className="text-sm font-medium md:font-normal">Sign In</span>
            </Link>
            <Button size="sm" variant="outline">
              Contact Sales
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="bg-gray-100 border-t border-b border-gray-200 dark:border-gray-800">
          <div className="container flex flex-col items-center justify-center py-12 text-center md:py-20 lg:py-32">
            <img alt="Image" className="mx-auto aspect-square m-4" height="300" src="/Medilift_logo.png" width="300" />
            <div className="max-w-[500px] space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Delivering hope with every flight.</h1>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Medilift connects remote communities with life-saving medical supplies using advanced drone delivery
                technology.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-4">
            <div className="flex items-center gap-2 p-4 md:col-span-2 md:px-6 lg:px-12">
              <CheckCircleIcon className="w-6 h-6 text-gray-500" />
              <div className="leading-none">
                <h3 className="font-semibold">Efficient Delivery</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Rapid transport of medical essentials to remote locations.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 p-4 md:col-span-2 md:px-6 lg:px-12">
              <CheckCircleIcon className="w-6 h-6 text-gray-500" />
              <div className="leading-none">
                <h3 className="font-semibold">Secure Transport</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Safe and reliable delivery with cutting-edge drone technology.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 p-4 md:col-span-2 md:px-6 lg:px-12">
              <CheckCircleIcon className="w-6 h-6 text-gray-500" />
              <div className="leading-none">
                <h3 className="font-semibold">Life-Saving Access</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Providing healthcare access to underserved communities.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 p-4 md:col-span-2 md:px-6 lg:px-12">
              <CheckCircleIcon className="w-6 h-6 text-gray-500" />
              <div className="leading-none">
                <h3 className="font-semibold">Scalable Solutions</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Customized delivery services to meet diverse medical needs.
                </p>
              </div>
            </div>
          </div>
          <div className="container flex flex-col items-center justify-center py-12 space-y-4 text-center md:space-y-6 md:py-24 lg:space-y-8 lg:py-32">
            <div className="max-w-[600px] space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Transforming Healthcare Delivery
              </h2>
              <p className="text-gray-500 md:text-xl/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Medilift's innovative approach to medical logistics ensures timely and efficient delivery of essential
                supplies, enabling healthcare providers to save lives and improve patient outcomes.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="#"
              >
                Contact Sales
              </Link>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                href="#"
              >
                Tour the Platform
              </Link>
            </div>
          </div>
          <div className="bg-gray-100 border-t border-b border-gray-200 dark:border-gray-800">
            <div className="container flex flex-col items-center justify-center py-12 space-y-4 text-center md:space-y-6 md:py-24 lg:space-y-8 lg:py-32">
              <div className="max-w-[600px] space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  The Future of Medical Logistics
                </h2>
                <p className="text-gray-500 md:text-xl/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Medilift's advanced drone delivery system is designed to revolutionize the way medical supplies are
                  transported, leveraging autonomous aircraft to overcome logistical challenges and reach remote areas
                  with precision and speed.
                </p>
              </div>
              <img
                alt="Image"
                className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                height="400"
                src="/placeholder.svg"
                width="800"
              />
            </div>
          </div>
          <div className="container flex flex-col items-center justify-center py-12 space-y-4 text-center md:space-y-6 md:py-24 lg:space-y-8 lg:py-32">
            <div className="max-w-[600px] space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Enabling Rapid Response</h2>
              <p className="text-gray-500 md:text-xl/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Medilift's drone delivery platform offers a reliable and agile solution for transporting medical
                equipment, vaccines, and essential supplies during emergencies and humanitarian crises, ensuring that
                aid reaches those in need when time is of the essence.
              </p>
            </div>
            <div className="grid max-w-sm gap-4 row-gap-0 mx-auto items-start sm:max-w-3xl sm:grid-cols-2 lg:gap-6 lg:max-w-5xl lg:grid-cols-4">
              <div className="flex flex-col items-center gap-2">
                <img
                  alt="Image"
                  className="aspect-square rounded-lg object-cover object-center"
                  height="200"
                  src="/placeholder.svg"
                  width="200"
                />
                <h3 className="font-semibold">Mobile Clinics</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Equipped with essential medical supplies to provide care in remote areas.
                </p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <img
                  alt="Image"
                  className="aspect-square rounded-lg object-cover object-center"
                  height="200"
                  src="/placeholder.svg"
                  width="200"
                />
                <h3 className="font-semibold">Emergency Kits</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Rapid deployment of aid packages for disaster relief efforts.
                </p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <img
                  alt="Image"
                  className="aspect-square rounded-lg object-cover object-center"
                  height="200"
                  src="/placeholder.svg"
                  width="200"
                />
                <h3 className="font-semibold">Vaccine Delivery</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Transporting vaccines to immunize communities against diseases.
                </p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <img
                  alt="Image"
                  className="aspect-square rounded-lg object-cover object-center"
                  height="200"
                  src="/placeholder.svg"
                  width="200"
                />
                <h3 className="font-semibold">Medical Supplies</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Delivering essential medical equipment to support healthcare facilities.
                </p>
              </div>
            </div>
          </div>
          <div className="container flex flex-col items-center justify-center py-12 space-y-4 text-center md:space-y-6 md:py-24 lg:space-y-8 lg:py-32">
            <div className="max-w-[600px] space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Seamless Integration</h2>
              <p className="text-gray-500 md:text-xl/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Medilift's platform is designed to integrate with existing healthcare systems, allowing for the
                efficient coordination of deliveries and the prioritization of critical medical shipments, all managed
                through a user-friendly interface.
              </p>
            </div>
            <div className="grid max-w-sm gap-4 row-gap-0 mx-auto items-start sm:max-w-3xl sm:grid-cols-2 lg:gap-6 lg:max-w-5xl lg:grid-cols-4">
              <div className="flex flex-col items-center gap-2">
                <img
                  alt="Image"
                  className="aspect-square rounded-lg object-cover object-center"
                  height="200"
                  src="/placeholder.svg"
                  width="200"
                />
                <h3 className="font-semibold">Healthcare Providers</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Enabling clinics and hospitals to request and receive medical supplies.
                </p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <img
                  alt="Image"
                  className="aspect-square rounded-lg object-cover object-center"
                  height="200"
                  src="/placeholder.svg"
                  width="200"
                />
                <h3 className="font-semibold">Logistics Teams</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Managing the scheduling and routing of drone deliveries for efficient operations.
                </p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <img
                  alt="Image"
                  className="aspect-square rounded-lg object-cover object-center"
                  height="200"
                  src="/placeholder.svg"
                  width="200"
                />
                <h3 className="font-semibold">Community Leaders</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Collaborating to identify healthcare needs and support initiatives for health outreach.
                </p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <img
                  alt="Image"
                  className="aspect-square rounded-lg object-cover object-center"
                  height="200"
                  src="/placeholder.svg"
                  width="200"
                />
                <h3 className="font-semibold">Emergency Response</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Coordinating the delivery of medical aid during crises and emergencies.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 border-t border-b border-gray-200 dark:border-gray-800">
            <div className="container flex flex-col items-center justify-center py-12 space-y-4 text-center md:space-y-6 md:py-24 lg:space-y-8 lg:py-32">
              <div className="max-w-[600px] space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">The Power of Innovation</h2>
                <p className="text-gray-500 md:text-xl/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Medilift's commitment to advancing healthcare delivery through technology is exemplified by the
                  seamless integration of its drone platform, empowering stakeholders to leverage the capabilities of
                  unmanned aerial vehicles for the benefit of their communities.
                </p>
              </div>
              <img
                alt="Image"
                className="aspect-[4/1] overflow-hidden rounded-xl object-cover object-center"
                height="300"
                src="/placeholder.svg"
                width="1200"
              />
            </div>
          </div>
          <div className="container flex flex-col items-center justify-center py-12 space-y-4 text-center md:space-y-6 md:py-24 lg:space-y-8 lg:py-32">
            <div className="max-w-[600px] space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Delivering Impact</h2>
              <p className="text-gray-500 md:text-xl/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Medilift's mission goes beyond transportation; it is about making a difference in the lives of
                individuals by ensuring that essential medical care reaches them when and where it is needed, no matter
                the obstacles that stand in the way.
              </p>
            </div>
            <div className="grid max-w-sm gap-4 row-gap-0 mx-auto items-start sm:max-w-3xl sm:grid-cols-2 lg:gap-6 lg:max-w-5xl lg:grid-cols-4">
              <div className="flex flex-col items-center gap-2">
                <img
                  alt="Image"
                  className="aspect-square rounded-lg object-cover object-center"
                  height="200"
                  src="/placeholder.svg"
                  width="200"
                />
                <h3 className="font-semibold">Hopeful Communities</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Embracing the promise of better health through access to medical services.
                </p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <img
                  alt="Image"
                  className="aspect-square rounded-lg object-cover object-center"
                  height="200"
                  src="/placeholder.svg"
                  width="200"
                />
                <h3 className="font-semibold">Empowered Caregivers</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Equipped with the tools to provide compassionate care to their patients.
                </p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <img
                  alt="Image"
                  className="aspect-square rounded-lg object-cover object-center"
                  height="200"
                  src="/placeholder.svg"
                  width="200"
                />
                <h3 className="font-semibold">Innovative Partners</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Collaborating to harness the potential of technology for social good.
                </p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <img
                  alt="Image"
                  className="aspect-square rounded-lg object-cover object-center"
                  height="200"
                  src="/placeholder.svg"
                  width="200"
                />
                <h3 className="font-semibold">Global Impact</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Extending the reach of healthcare to underserved regions around the world.
                </p>
              </div>
            </div>
          </div>
          <div className="container flex flex-col items-center justify-center py-12 space-y-4 text-center md:space-y-6 md:py-24 lg:space-y-8 lg:py-32" />
        </div>
      </main>
    </div>
  )
}

function CheckCircleIcon(props:any) {
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


function DropletIcon(props:any) {
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
      <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
    </svg>
  )
}


function UserIcon(props:any) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}
