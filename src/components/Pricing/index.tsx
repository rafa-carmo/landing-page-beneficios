// import { CheckIcon } from '@heroicons/react/solid'

import Link from 'next/link'
import { Check } from 'phosphor-react'

import { convertToCurrency } from '../../utils/valueConvert'

type tier = {
  name: string
  href: string
  priceMonthly: number
  from?: boolean
  description: string
  includedFeatures: string[]
}

export interface PricingProps {
  tiers: tier[]
}

export function Pricing({ tiers }: PricingProps) {
  return (
    <div className="bg-white container mx-auto">
      <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:flex-col sm:align-center">
          <h2 className="text-5xl font-bold text-gray-900 sm:text-center">
            Serviços
          </h2>
        </div>
        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 flex justify-center items-start flex-wrap gap-16">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className="border border-gray-200 rounded-lg shadow-2xl divide-y divide-gray-200 w-80"
            >
              <div className="p-6 text-center">
                <h2 className="text-lg leading-6 font-medium text-gray-900">
                  {tier.name}
                </h2>
                {/* <p className="mt-4 text-sm text-gray-500">{tier.description}</p> */}
                <p className="mt-8 flex flex-col items-center">
                  {tier.from ? 'A partir de' : 'Por apenas'}
                  <span className="text-4xl font-extrabold text-gray-900">
                    {convertToCurrency(tier.priceMonthly)}
                  </span>
                  <span className="text-xs">Por Mês</span>
                </p>
                <Link
                  href={tier.href}
                  className="mt-8 block w-full bg-primary-500 border border-gray-800 rounded-md py-2 text-sm font-semibold text-zinc-100 text-center hover:bg-primary-300 transition-colors"
                >
                  Contratar
                </Link>
              </div>
              <div className="pt-6 pb-8 px-6">
                <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase text-center">
                  Serviços inclusos
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {tier.includedFeatures.map((feature) => (
                    <li key={feature} className="flex space-x-3">
                      {/* <CheckIcon className="flex-shrink-0 h-5 w-5 text-green-500" aria-hidden="true" /> */}
                      <Check
                        className="flex-shrink-0 h-5 w-5 text-green-500"
                        aria-hidden="true"
                        weight="bold"
                      />
                      <span className="text-sm text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
