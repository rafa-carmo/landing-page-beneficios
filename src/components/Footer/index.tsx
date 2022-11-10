import { Book, FacebookLogo, InstagramLogo } from 'phosphor-react'

export function Footer() {
  return (
    <footer className="bg-primary-500 pt-24">
      <div className="container mx-auto">
        <div className="flex items-center text-zinc-100 pb-10">
          <Book size={50} weight="bold" />
          {/* Logo */}
          <h2 className="font-bold text-5xl">Logo</h2>
        </div>
        <div className="pt-10 grid grid-cols-3 gap-24 text-zinc-100">
          <div className="flex flex-col gap-5">
            <h4 className="font-bold ">Nome</h4>
            <p className="font-thin">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
              arcu lorem cras lacus amet. In cras odio enim rhoncus consectetur.
            </p>
          </div>
          <div className="flex flex-col gap-5 text-zinc-100">
            <h4 className="font-bold ">Sobre nós</h4>
            <p className="font-thin">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
              arcu lorem cras lacus amet. In cras odio enim rhoncus consectetur.
            </p>
          </div>

          <div className="pt-10 flex gap-5">
            <a
              href="#"
              className="text-zinc-200 hover:text-zinc-400 transition-colors duration-300"
            >
              <svg
                width={24}
                height={24}
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_435_331)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 12.801c0 5.966 4.333 10.927 10 11.933v-8.667H7v-3.333h3v-2.667c0-3 1.933-4.666 4.667-4.666.866 0 1.8.133 2.666.266v3.067H15.8c-1.467 0-1.8.733-1.8 1.667v2.333h3.2l-.533 3.333H14v8.667c5.667-1.006 10-5.966 10-11.933C24 6.164 18.6.734 12 .734S0 6.164 0 12.801z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_435_331">
                    <path
                      fill="currentColor"
                      transform="translate(0 .734)"
                      d="M0 0H24V24H0z"
                    />
                  </clipPath>
                </defs>
              </svg>
            </a>

            <a
              href="#"
              className="text-zinc-200 hover:text-zinc-400 transition-colors duration-300"
            >
              <svg
                width={24}
                height={25}
                viewBox="0 0 24 25"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.465 1.8c1.173-.054 1.547-.066 4.535-.066 2.988 0 3.362.013 4.534.066 1.172.053 1.972.24 2.672.511.733.277 1.398.71 1.948 1.27.56.55.992 1.213 1.268 1.947.272.7.458 1.5.512 2.67.054 1.175.066 1.55.066 4.536 0 2.988-.013 3.362-.066 4.535-.053 1.17-.24 1.97-.512 2.67a5.396 5.396 0 01-1.268 1.95c-.55.56-1.215.991-1.948 1.267-.7.272-1.5.458-2.67.512-1.174.054-1.548.066-4.536.066-2.988 0-3.362-.013-4.535-.066-1.17-.053-1.97-.24-2.67-.512a5.396 5.396 0 01-1.949-1.268 5.392 5.392 0 01-1.269-1.948c-.271-.7-.457-1.5-.511-2.67C1.012 16.095 1 15.721 1 12.734c0-2.988.013-3.362.066-4.534.053-1.172.24-1.972.511-2.672a5.396 5.396 0 011.27-1.948 5.392 5.392 0 011.947-1.269c.7-.27 1.5-.457 2.67-.51h.001zm8.98 1.98c-1.16-.053-1.508-.064-4.445-.064-2.937 0-3.285.011-4.445.064-1.073.05-1.655.228-2.043.38-.513.2-.88.436-1.265.821a3.412 3.412 0 00-.822 1.265c-.151.388-.33.97-.379 2.043-.053 1.16-.064 1.508-.064 4.445 0 2.937.011 3.285.064 4.445.049 1.073.228 1.655.379 2.043.176.477.457.91.822 1.265.355.365.788.646 1.265.822.388.151.97.33 2.043.38 1.16.052 1.507.063 4.445.063 2.938 0 3.285-.01 4.445-.064 1.073-.049 1.655-.228 2.043-.379.513-.2.88-.437 1.265-.822.365-.355.646-.788.822-1.265.151-.388.33-.97.379-2.043.053-1.16.064-1.508.064-4.445 0-2.937-.011-3.285-.064-4.445-.049-1.073-.228-1.655-.379-2.043-.2-.513-.437-.88-.822-1.265a3.413 3.413 0 00-1.265-.822c-.388-.15-.97-.33-2.043-.379zm-5.85 12.345a3.67 3.67 0 102.641-6.846 3.67 3.67 0 00-2.641 6.846zM8.002 8.736a5.654 5.654 0 117.996 7.996 5.654 5.654 0 01-7.996-7.996zm10.906-.814a1.336 1.336 0 10-1.834-1.944 1.336 1.336 0 001.834 1.944z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className="w-full text-center pt-10 pb-2 text-zinc-100 font-semibold">
          <span>© 2022 -- Benefícios.</span>
        </div>
      </div>
    </footer>
  )
}
