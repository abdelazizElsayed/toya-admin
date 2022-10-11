import { useAdminStore, useAdminUsers } from "medusa-react"
import React, { useState } from "react"
import Messages from "../../../domain/messages"
import CashIcon from "../../fundamentals/icons/cash-icon"
import CustomerIcon from "../../fundamentals/icons/customer-icon"
import DollarSignIcon from "../../fundamentals/icons/dollar-sign-icon"
import GearIcon from "../../fundamentals/icons/gear-icon"
import GiftIcon from "../../fundamentals/icons/gift-icon"
import SaleIcon from "../../fundamentals/icons/sale-icon"
import TagIcon from "../../fundamentals/icons/tag-icon"
import SidebarCompanyLogo from "../../molecules/sidebar-company-logo"
import SidebarMenuItem from "../../molecules/sidebar-menu-item"
import SidebarTeam from "../sidebar-team"
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import DetailsIcon from './../../fundamentals/icons/details-icon';
import DownloadIcon from "../../fundamentals/icons/download-icon"

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const ICON_SIZE = 18

const Sidebar: React.FC = () => {
  const [currentlyOpen, setCurrentlyOpen] = useState(-1)

  const { store } = useAdminStore()

  const triggerHandler = () => {
    const id = triggerHandler.id++
    return {
      open: currentlyOpen === id,
      handleTriggerClick: () => setCurrentlyOpen(id),
    }
  }
  // We store the `id` counter on the function object, as a state creates
  // infinite updates, and we do not want the variable to be free floating.
  triggerHandler.id = 0

  return (
    <div className="min-w-sidebar max-w-sidebar h-screen overflow-y-auto bg-gray-0 border-r border-grey-20 py-base px-base">
      <div className="h-full ">
        <SidebarCompanyLogo storeName={"Toya"} />

        <div className="border-b pb-3.5 border-grey-20">
          <SidebarMenuItem
            pageLink={"/a/orders"}
            icon={<DollarSignIcon size={ICON_SIZE} />}
            triggerHandler={triggerHandler}
            text={"Orders"}
          />
          <SidebarMenuItem
            pageLink={"/a/products"}
            icon={<TagIcon size={ICON_SIZE} />}
            text={"Products"}
            triggerHandler={triggerHandler}
          />
          <SidebarMenuItem
            pageLink={"/a/customers"}
            icon={<CustomerIcon size={ICON_SIZE} />}
            triggerHandler={triggerHandler}
            text={"Customers"}
          />
          <SidebarMenuItem
            pageLink={"/a/discounts"}
            icon={<SaleIcon size={ICON_SIZE} />}
            triggerHandler={triggerHandler}
            text={"Discounts"}
          />
          <SidebarMenuItem
            pageLink={"/a/gift-cards"}
            icon={<GiftIcon size={ICON_SIZE} />}
            triggerHandler={triggerHandler}
            text={"Gift Cards"}
          />
          <SidebarMenuItem
            pageLink={"/a/pricing"}
            icon={<CashIcon size={ICON_SIZE} />}
            triggerHandler={triggerHandler}
            text={"Pricing"}
          />
          <SidebarMenuItem
            pageLink={"/a/settings"}
            icon={<GearIcon size={ICON_SIZE} />}
            triggerHandler={triggerHandler}
            text={"Settings"}
          />


          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex w-full justify-center rounded-md border border-0 bg-white px-4 py-2 text-sm font-medium text-gray-700  hover:bg-gray-50 focus:outline-none ">
                Message
                <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute left-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        <SidebarMenuItem
                          pageLink={"/a/contact"}
                          icon={<DetailsIcon size={ICON_SIZE} />}
                          triggerHandler={triggerHandler}
                          text={"Contact"}
                        />
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        <SidebarMenuItem
                          pageLink={"/a/inquiries"}
                          icon={<DetailsIcon size={ICON_SIZE} />}
                          triggerHandler={triggerHandler}
                          text={"Inquiries"}
                        />
                      </a>
                    )}
                  </Menu.Item>



                </div>
              </Menu.Items>
            </Transition>
          </Menu>

          {/* <div className="dropdown">
            <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Messages
            </button>
            <ul className="dropdown-menu">

              <li>
                <a className="dropdown-item" href="#">
                  
                </a>
              </li>

              <li>
                <a className="dropdown-item" href="#">
                  </a>
              </li>
            </ul>
          </div> */}





        </div>

        <div className="font-semibold mt-5 flex flex-col text-small">
          <SidebarTeam />
        </div>
      </div>
    </div>
  )
}

export default Sidebar
