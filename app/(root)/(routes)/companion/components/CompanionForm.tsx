"use client"

interface companionFormProps {
  initialData: Companion | null
  categories: Category[]
}

import { Category, Companion } from "@prisma/client"
import React from "react"

const CompanionForm = ({ categories, initialData }: companionFormProps) => {
  return <div>CompanionForm</div>
}

export default CompanionForm
