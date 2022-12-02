import ReactPDF, {
  Document,
  Page,
  Text,
  StyleSheet,
  Image,
  View,
  PDFViewer,
  Font
} from '@react-pdf/renderer'
import { useState, useEffect } from 'react'

import { convertToCurrency } from '../../utils/valueConvert'

/* eslint-disable jsx-a11y/alt-text */

const styles = StyleSheet.create({
  body: {
    paddingTop: 15,
    paddingBottom: 20,
    paddingHorizontal: 35
  },
  image: {
    marginVertical: 5,
    width: 100
  },
  labelInput: {
    fontSize: 10,
    fontWeight: 900,
    color: '#4b5563',
    textTransform: 'uppercase',
    marginTop: 10
  },
  formInput: {
    fontSize: 12,
    fontFamily: 'Times-Roman',
    padding: 5,
    border: '1px solid black'
  },
  agregado: {
    marginVertical: 8
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'Oswald'
  },
  author: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 40
  },
  subtitle: {
    fontSize: 18,
    margin: 12,
    fontFamily: 'Oswald',
    borderBottom: '1px solid #4b5563'
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: 'justify',
    fontFamily: 'Times-Roman'
  },

  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: 'center',
    color: 'grey'
  }
})
Font.register({
  family: 'Oswald',
  src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
})

export interface PDFFuneral {
  name: string
  cpf?: string
  dateBirth?: string
  telephone: string
  email: string
  plan: {
    age: string
    type: string
    value: number
  }
  dependents: {
    quantity: number
    age: string
    value: number
  }[]
  contract: string
}

export function PdfFuneral({
  name,
  cpf,
  dateBirth,
  telephone,
  email,
  plan,
  dependents,
  contract
}: PDFFuneral) {
  return (
    <Document>
      <Page style={styles.body}>
        <Image style={styles.image} src="/images/logo.png" />
        <Text style={styles.header} fixed>
          ~ Viver Mais ~
        </Text>
        <Text style={styles.title}>
          Informações para assinatura de assistencia funeral
        </Text>
        <Text style={styles.subtitle}>Informações pessoais</Text>
        <Text style={styles.labelInput}>Nome</Text>
        <Text style={styles.formInput}>{name}</Text>
        <Text style={styles.labelInput}>CPF</Text>
        <Text style={styles.formInput}>{cpf || 'Não informado'}</Text>
        <Text style={styles.labelInput}>Data de Nascimento</Text>
        <Text style={styles.formInput}>{dateBirth || 'Não informada'}</Text>
        <Text style={styles.labelInput}>Telefone</Text>
        <Text style={styles.formInput}>{telephone}</Text>
        <Text style={styles.labelInput}>E-mail</Text>
        <Text style={styles.formInput}>{email}</Text>
        <Text style={styles.labelInput}>Plano selecionado</Text>
        <Text style={styles.formInput}>
          {plan.age} anos - {plan.type} - Valor -{' '}
          {convertToCurrency(plan.value)}
        </Text>
        <Text style={styles.labelInput}>Agregados / Dependentes</Text>
        <View style={styles.formInput}>
          {dependents.length > 0 ? (
            dependents.map((dependent) => (
              <Text key={dependent.age} style={styles.agregado}>
                {dependent.quantity} - {dependent.age} anos -{' '}
                {convertToCurrency(dependent.value)}
              </Text>
            ))
          ) : (
            <Text style={styles.agregado}>Nenhum</Text>
          )}
        </View>
        <Text style={styles.subtitle}>Contrato</Text>
        <Text style={styles.text}>{contract}</Text>
      </Page>
    </Document>
  )
}

export function PdfView(props: PDFFuneral) {
  const [isServer, setIsServer] = useState(true)
  useEffect(() => {
    setIsServer(false)
  }, [isServer])
  return (
    <>
      {!isServer && (
        <PDFViewer style={{ width: '100vw', height: '100vh' }}>
          <PdfFuneral {...props} />
        </PDFViewer>
      )}
    </>
  )
}
