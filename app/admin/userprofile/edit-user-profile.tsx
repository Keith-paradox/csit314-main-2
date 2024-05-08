'use client'

import React, { useEffect } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input, Select, SelectItem, Switch } from "@nextui-org/react";
import { countries } from "@/utils/countries";
import { useFormState, useFormStatus } from "react-dom";
import Link from "next/link";
import { submit } from "../../signup/_action";
import toast from "react-hot-toast";
import { useState } from "react";
import { UserProfileInterface } from "@/utils/demo";

export default function EditUserProfile({ profile }: { profile: UserProfileInterface }) {
    const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
    const [state, formAction] = useFormState(submit, null);

    const [active, setActive] = useState(profile.activated)
    const [role, setRole] = useState(profile.role)

    useEffect(() => {
        if (!state?.message) return

        if (state?.success) {
            toast.success('Account created successfully')
            onClose()
        }

        if (!state?.success && state?.message) {
            toast.error(state?.message || 'An error occurred. Please try again.')
        }
    }, [state])

    return (
        <>
            <Button size="sm" onPress={onOpen}>
                <svg
                    className=" hover:cursor-pointer"
                    aria-hidden="true"
                    fill="none"
                    focusable="false"
                    height="1em"
                    role="presentation"
                    viewBox="0 0 20 20"
                    width="1em"
                >
                    <path
                        d="M11.05 3.00002L4.20835 10.2417C3.95002 10.5167 3.70002 11.0584 3.65002 11.4334L3.34169 14.1334C3.23335 15.1084 3.93335 15.775 4.90002 15.6084L7.58335 15.15C7.95835 15.0834 8.48335 14.8084 8.74168 14.525L15.5834 7.28335C16.7667 6.03335 17.3 4.60835 15.4583 2.86668C13.625 1.14168 12.2334 1.75002 11.05 3.00002Z"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit={10}
                        strokeWidth={1.5}
                    />
                    <path
                        d="M9.90833 4.20831C10.2667 6.50831 12.1333 8.26665 14.45 8.49998"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit={10}
                        strokeWidth={1.5}
                    />
                    <path
                        d="M2.5 18.3333H17.5"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit={10}
                        strokeWidth={1.5}
                    />
                </svg>
            </Button>

            <Modal isOpen={isOpen} onOpenChange={onOpenChange} className="py-4">
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Update User</ModalHeader>
                            <ModalBody>
                                <div>
                                    <form action="">
                                        <div className="">
                                            <Input
                                                isRequired
                                                name="role"
                                                className="mb-8  mx-auto"
                                                type="string"
                                                label="Role"
                                                labelPlacement={'outside'}
                                                placeholder="Role"
                                                defaultValue={role}
                                            />
                                            <Select
                                                name="activated"
                                                className="mb-4 max-w-[400px] mx-auto"
                                                defaultSelectedKeys={[active ? "true" : "false"]}
                                                label="Activated"
                                                labelPlacement={'outside'}
                                                placeholder="Activated"
                                            >
                                                <SelectItem value={"true"} key={"true"}>
                                                    active
                                                </SelectItem>
                                                <SelectItem value={"false"} key={"false"}>
                                                    suspended
                                                </SelectItem>

                                            </Select>
                                            <div className=" text-white bg-green-400 w-fit h-fit p-2 rounded-lg">
                                                Save
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}



function Btn() {
    const { pending } = useFormStatus();
    return (
        <div className="  grid place-items-center">
            <Button type="submit" className=" rounded-full bg-brand-200 font-bold text-white">
                {pending ? 'Loading...' : 'Create Account'}
            </Button>
        </div>
    );
}
