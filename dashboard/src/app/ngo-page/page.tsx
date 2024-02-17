/**
 * v0 by Vercel.
 * @see https://v0.dev/t/PsHJ30q3v0P
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Component() {
  return (
    <>
        <div className="flex items-center gap-4">
        <Link className="flex items-center gap-2 font-semibold" href="#">
          <Package2Icon className="h-6 w-6" />
          <span className="">MediLift</span>
        </Link>
        <h1 className="text-2xl font-semibold">NGOs</h1>
      </div>
      <Card>
        <CardContent className="flex flex-col gap-2">
          <div className="space-y-2">
            <h2 className="text-lg font-semibold">About Us</h2>
            <p>
              Learn about our mission, values, and impact. We are dedicated to supporting NGOs worldwide. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.
            </p>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="flex flex-col gap-2">
          <div className="space-y-2">
            <h2 className="text-lg font-semibold">Our Resources</h2>
            <Card>
              <CardContent className="flex flex-col gap-2">
                <div className="space-y-2">
                  <h3 className="text-base font-semibold">Resource 1</h3>
                  <p>Description of Resource 1</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col gap-2">
                <div className="space-y-2">
                  <h3 className="text-base font-semibold">Resource 2</h3>
                  <p>Description of Resource 2</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col gap-2">
                <div className="space-y-2">
                  <h3 className="text-base font-semibold">Resource 3</h3>
                  <p>Description of Resource 3</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="flex flex-col gap-2">
          <div className="space-y-2">
            <h2 className="text-lg font-semibold">Locations</h2>
            <Card>
              <CardContent className="flex flex-col gap-2">
                <div className="space-y-2">
                  <h3 className="text-base font-semibold">Location 1</h3>
                  <p>Description of Location 1</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col gap-2">
                <div className="space-y-2">
                  <h3 className="text-base font-semibold">Location 2</h3>
                  <p>Description of Location 2</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col gap-2">
                <div className="space-y-2">
                  <h3 className="text-base font-semibold">Location 3</h3>
                  <p>Description of Location 3</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="flex flex-col gap-2">
          <div className="space-y-2">
            <h2 className="text-lg font-semibold">Needs Assessment</h2>
            <form>
              <div className="space-y-2">
                <Label htmlFor="resource">Resource Needed</Label>
                <Input id="resource" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" />
              </div>
              <Button>Submit</Button>
            </form>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="flex flex-col gap-2">
          <div className="space-y-2">
            <h2 className="text-lg font-semibold">Collaboration</h2>
            <Card>
              <CardContent className="flex flex-col gap-2">
                <div className="space-y-2">
                  <h3 className="text-base font-semibold">Collaboration Opportunity 1</h3>
                  <p>Description of Collaboration Opportunity 1</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col gap-2">
                <div className="space-y-2">
                  <h3 className="text-base font-semibold">Collaboration Opportunity 2</h3>
                  <p>Description of Collaboration Opportunity 2</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="flex flex-col gap-2">
          <div className="space-y-2">
            <h2 className="text-lg font-semibold">Get Involved</h2>
            <p>
              Learn how to join our efforts and contribute. Explore various ways to get involved and make a difference.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </div>
        </CardContent>
      </Card>
    </>
  )
}

function Package2Icon(props:any) {
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