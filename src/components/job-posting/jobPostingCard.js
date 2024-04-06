import React, { useEffect, useState } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { collection, getDocs, limit, orderBy ,query,doc, getDoc, where} from "firebase/firestore";
import { db } from "../../firebase";
export default function JobPostingCard({ job, index }){
    const [profileImage, setProfileImageUrl] = useState({ profileImageUrl: 'https://github.com/shadcn.png' });
    const userUid = job.companyId
    useEffect(() => {
        const fetchUserProfile = async () => {
            const jobDoc = await getDoc(doc(db, "users", userUid));
            setProfileImageUrl(jobDoc.data());
        };
        fetchUserProfile();
    }, []);
    return (
        <Card className="w-[420px] h-[420px] dark:border-error-white dark:shadow-glow dark:bg-error-black rounded-3xl">
            <div className="flex items-center justify-between">
                <div>
                    <img
                        src="images/jobPostIcon.png"
                        alt=""
                        style={{ width: "48px", height: "48px" }}
                        className="justify-start mt-2 ml-5 bg-transparent rounded-3xl"
                    />
                </div>
                <div className = "flex justify-end flex-grow pr-4">
                    <button className="bg-white mt-2 p-3 font-bold rounded-lg border inline-flex items-center hover:bg-accent hover:text-accent-foreground focus:bg-violet-300">
                        <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path strokeLinecap="round" strokeLinejoin="round"
                        d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"></path></svg>
                        <span>Bookmark</span>
                    </button>
                </div>
            </div>
            <CardHeader className="-mt-5">
                <div className="flex justify-between items-start">
                    <div>
                        <CardTitle className="text-2xl font-bold line-clamp-1 ">
                            {job.title}
                        </CardTitle>
                        <div className="flex">
                        <Avatar className=" mr-2 w-[1.9vw] h-[1.9vw]">
                        <AvatarImage src={profileImage?.profileImageUrl || 'https://github.com/shadcn.png'} />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <h1 className="text-lg line-clamp-1">
                            {job.companyName}
                        </h1>
                        </div>
                        <h2 className="text-base line-clamp-1">
                        </h2>
                    </div>
                </div>
                <div className="flex justify-between items-start">
                    <div>
                        <div className="flex items-center ml-0">
                            <img
                                src="images/moneySymbol.png"
                                alt=""
                                style={{ width: "24px", height: "24px" }}
                                className="justify-start mt-2 bg-error-white rounded-3xl"
                            />
                            <div className="flex items-center space-x-0 ml-2 mt-1">
                                <span className="text-lg font-semibold">$</span>
                                <h3 className="text-lg font-semibold">
                                    {job.rate}
                                </h3>
                                <span className="text-lg font-semibold">
                                    /HR
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center ml-0">
                            <img
                                src="images/briefcase.png"
                                alt=""
                                style={{ width: "24px", height: "24px" }}
                                className="justify-start mt-2 rounded-3xl filter brightness-0 dark:brightness-100"
                            />
                            <h3 className="text-lg font-base ml-2 mt-1">
                                {job.location}
                            </h3>
                        </div>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="justify-center w-full z-1">
                <p className="text-wrap line-clamp-3">{job.description}</p>
            </CardContent>
            <CardFooter>
                <Link href={`/jobs/${job.jobId}`}
                            legacyBehavior
                            passHref>
                    <Button
                        variant="outline"
                        className="bg-error-darkPink rounded-[32px] w-[100%] h-auto text-error-white text-[22px] z-10"
                    >
                        View
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    );
}