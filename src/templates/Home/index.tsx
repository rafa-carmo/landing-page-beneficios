import { Contact } from '../../components/Contact'
import { HowWorks } from '../../components/HowWorks/index'
import { Partnerships } from '../../components/Partnerships'
import { Pricing } from '../../components/Pricing'
import { SliderComponent } from '../../components/Slider'
import { Base } from '../Base/index'
export function HomeTemplate() {
  return (
    <Base>
      <SliderComponent />
      <Pricing />
      <Partnerships />
      <HowWorks />

      <div className="container mx-auto my-16">
        <hr className="max-w-2xl py-4 mx-auto" />
        <h3 className="text-2xl md:text-4xl font-bold text-center mb-10">
          Sobre a empresa
        </h3>
        <div className="flex flex-col lg:flex-row gap-10 flex-wrap">
          <div className="flex flex-col items-center justify-around text-xl md:text-2xl text-center md:gap-5 py-10 flex-1 px-10 md:px-0">
            <h3 className="font-bold text-primary-500 pb-4">
              Somos comprometidos com a melhoria da sua qualidade de vida e de
              sua família.
            </h3>
            <span>
              <b className="font-bold text-primary-500">Nossa Missão:</b> <br />
              <p>trazer excelentes benefícios para todos os associados.</p>
            </span>
            <span>
              <b className="font-bold text-primary-500">Nossa Visão:</b> <br />
              <p>ser a maior empresa de benefícios do Brasil.</p>
            </span>
            <span>
              <b className="font-bold text-primary-500"> Nossos Valores:</b>{' '}
              <br />
              <p>
                Transparência, qualidade, cliente em primeiro lugar e
                relacionamento.
              </p>
            </span>
          </div>
          <div className="md:flex-1">
            <img
              src="/images/maps.jpg"
              alt="Local of business in map"
              className="lg:max-w-lg w-screen"
            />
          </div>
        </div>
        <hr className="max-w-2xl py-4 mx-auto my-16" />
      </div>
      <Contact />
    </Base>
  )
}
