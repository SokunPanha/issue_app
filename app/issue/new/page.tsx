"use client"
import { Button, TextArea, TextField } from '@radix-ui/themes'
import React from 'react'

export default function Page() {
  return (
   <div>
    <div className="max-w-xl flex flex-col gap-3">
    <TextField.Root>
        <TextField.Input placeholder='title'  />
    </TextField.Root>

    <TextArea placeholder='description'/>
    <Button className="w-[120px]">Create Issue</Button>
    </div>
   </div>
  )
}
