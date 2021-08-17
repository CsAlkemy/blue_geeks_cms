/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react"
import * as React from "react"
import { Popover, Transition } from "@headlessui/react"
import { Link } from "gatsby"
import { HiOutlineUser, HiOutlineSearch } from "react-icons/hi"

import { CategoryDataQuery } from "../../hooks/allContentfulCategory"

import {
  MenuIcon,
  CheckCircleIcon,
  SupportIcon,
  XIcon,
} from "@heroicons/react/outline"
import {
  ChevronDownIcon,
  CodeIcon,
  QuestionMarkCircleIcon,
  UserGroupIcon,
} from "@heroicons/react/solid"

const resources = [
  {
    name: "FQA",
    description: "",
    href: "#",
    icon: QuestionMarkCircleIcon,
  },
  {
    name: "Forum",
    description: "",
    href: "#",
    icon: UserGroupIcon,
  },
  {
    name: "Help",
    description: "",
    href: "#",
    icon: SupportIcon,
  },
  {
    name: "Programming",
    description: "",
    href: "#",
    icon: CodeIcon,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export default function Example() {
  const { nodes } = CategoryDataQuery()
  return (
    <div className="sticky top-0 z-50">
      <Popover className="relative bg-background">
        {({ open }) => (
          <>
            <div className="w-full lg:w-8/12 mx-auto px-4 sm:px-6">
              <div className="flex justify-between items-center  py-6 md:justify-start md:space-x-10">
                <div className="flex justify-start lg:w-0 lg:flex-1">
                  <Link to="/">
                    <h1 className="text-3xl tracking-wider text-white">
                      <span className="font-extrabold">TECH</span>
                      <span className="text-cyan-500 font-light">REV</span>
                    </h1>
                  </Link>
                </div>
                <div className="-mr-2 -my-2 md:hidden">
                  <Popover.Button className="bg-background rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open menu</span>
                    <MenuIcon
                      className="h-7 w-7 text-white"
                      aria-hidden="true"
                    />
                  </Popover.Button>
                </div>
                <Popover.Group as="nav" className="hidden md:flex space-x-10">
                  <Popover className="relative">
                    {({ open }) => (
                      <>
                        <Popover.Button
                          className={classNames(
                            open ? "text-cyan-500" : "text-gray-50",
                            "group bg-background px-2 rounded-md inline-flex items-center text-base font-medium hover:text-cyan-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                          )}
                        >
                          <span>BLOG</span>
                          <ChevronDownIcon
                            className={classNames(
                              open ? "text-cyan-500" : "text-gray-50",
                              "ml-2 h-7 w-7 group-hover:text-gray-50"
                            )}
                            aria-hidden="true"
                          />
                        </Popover.Button>

                        <Transition
                          show={open}
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <Popover.Panel
                            static
                            className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                          >
                            <div className="rounded-lg shadow-lg ring-1 ring-white ring-opacity-5 overflow-hidden">
                              <div className="relative grid gap-6 bg-background px-5 py-6 sm:gap-8 sm:p-8">
                                {nodes.map(category => (
                                  <Link
                                    to={`/category/${category.name}`}
                                    key={category.id}
                                    href={category.id}
                                    className="-m-3 p-3 flex items-start rounded-lg hover:bg-black"
                                  >
                                    <CheckCircleIcon
                                      className="flex-shrink-0 h-6 w-6 text-gray-50"
                                      aria-hidden="true"
                                    />
                                    <div className="ml-4">
                                      <p className="text-base font-medium text-gray-50">
                                        {category.name}
                                      </p>
                                      <p className="text-sm font-light text-gray-200">
                                        {category.description}
                                      </p>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>

                  <Link
                    to="/blogCategory"
                    className="text-base font-medium hover:text-cyan-500 text-white"
                  >
                    TECH
                  </Link>
                  <Link
                    to=""
                    href="#"
                    className="text-base font-medium hover:text-cyan-500 text-white"
                  >
                    REVIEWS
                  </Link>
                  <Link
                    to=""
                    href="#"
                    className="text-base font-medium hover:text-cyan-500 text-white"
                  >
                    SCIENCE
                  </Link>

                  <Popover className="relative">
                    {({ open }) => (
                      <>
                        <Popover.Button
                          className={classNames(
                            open ? "text-cyan-500" : "text-gray-50",
                            "group bg-background px-2 hover:text-cyan-500 rounded-md inline-flex items-center text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                          )}
                        >
                          <span>MORE</span>
                          <ChevronDownIcon
                            className={classNames(
                              open ? "text-cyan-500" : "text-gray-50 ",
                              "ml-2 h-5 w-5 "
                            )}
                            aria-hidden="true"
                          />
                        </Popover.Button>

                        <Transition
                          show={open}
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <Popover.Panel
                            static
                            className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 max-w-screen-lg sm:px-0"
                          >
                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                              <div className="relative grid gap-6 bg-background px-5 py-6 sm:gap-8 sm:p-8 justify-items-start">
                                {nodes.map(category => (
                                  <Link
                                    to={`/category/${category.name}`}
                                    key={category.id}
                                    className="-m-3 p-3 flex items-start rounded-lg hover:bg-black"
                                  >
                                    <CheckCircleIcon
                                      className="flex-shrink-0 h-6 w-6 text-white"
                                      aria-hidden="true"
                                    />
                                    <div className="ml-4">
                                      <p className="text-base font-medium text-gray-50">
                                        {category.name}
                                      </p>
                                      <p className="mt-1 text-sm text-gray-400"></p>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                </Popover.Group>
                <div className="hidden md:flex gap-x-3 items-center justify-end md:flex-1 lg:w-0">
                  <Link to="#" className="bg-black  p-2 rounded-full">
                    <HiOutlineUser className="text-white h-5 w-5" />
                  </Link>
                  <Link to="#" className="bg-cyan-500  p-2 rounded-full">
                    <HiOutlineSearch className="text-white h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>

            <Transition
              show={open}
              as={Fragment}
              enter="duration-200 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                static
                className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              >
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-background divide-y-2 divide-gray-600">
                  <div className="pt-5 pb-6 px-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <img
                          className="h-8 w-auto"
                          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                          alt="Workflow"
                        />
                      </div>
                      <div className="-mr-2">
                        <Popover.Button className="bg-black rounded-md p-2 inline-flex items-center justify-center text-white hover:text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                          <span className="sr-only">Close menu</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                    <div className="mt-6">
                      <nav className="grid gap-y-8">
                        {nodes.map(category => (
                          <Link
                            to={`/category/${category.name}`}
                            key={category.name}
                            className="-m-3 p-3 flex items-center rounded-md hover:bg-black"
                          >
                            <CheckCircleIcon
                              className="flex-shrink-0 h-6 w-6 text-gray-50"
                              aria-hidden="true"
                            />
                            <span className="ml-3 text-base font-medium text-gray-50">
                              {category.name}
                            </span>
                          </Link>
                        ))}
                      </nav>
                    </div>
                  </div>
                  <div className="py-6 px-5 space-y-6">
                    <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                      <Link
                        to=""
                        href="#"
                        className="text-base font-medium text-gray-50 hover:text-cyan-500"
                      >
                        Pricing
                      </Link>

                      <Link
                        to=""
                        href="#"
                        className="text-base font-medium text-gray-50 hover:text-cyan-500"
                      >
                        Docs
                      </Link>
                      {resources.map(item => (
                        <Link
                          to=""
                          key={item.name}
                          href={item.href}
                          className="text-base font-medium text-gray-50 hover:text-cyan-500"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                    <div>
                      <Link
                        to=""
                        href="#"
                        className="w-full flex items-center justify-center px-4 py-2  rounded-md shadow-sm text-base font-medium text-white bg-cyan-500 hover:bg-cyan-500"
                      >
                        Sign up
                      </Link>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  )
}
