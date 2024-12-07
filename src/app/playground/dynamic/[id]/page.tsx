'use client';

import BackButton from "@/components/utils/backbutton";
import React from "react";

type Params = {
  id: string;
};

type SearchParams = {
  problem?: string;
};

type Props = {
  params: Promise<Params>;
  searchParams: Promise<SearchParams>;
};

export default function DynamicRoute({ params, searchParams }: Props) {
  const resolvedParams = React.use(params);
  const resolvedSearchParams = React.use(searchParams);

  const { id } = resolvedParams;
  const problem = resolvedSearchParams.problem || "No problem specified";

  return (
    <div>
      <BackButton />
      <h1>Data: {id}</h1>
      <p>{problem}</p>
    </div>
  );
}
