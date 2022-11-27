export interface GetPlans {
  totalQtdFoundInPage: number
  Plans: Plan[]
}

export interface Plan {
  galaxPayId: number
  myId: any
  name: string
  periodicity: string
  quantity: number
  contract: any
  additionalInfo: any
  createdAt: string
  updatedAt: string
  PlanPrices: PlanPrice[]
}

export interface PlanPrice {
  payment: string
  value: number
  installment: string
}
