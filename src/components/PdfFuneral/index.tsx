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

export function PdfFuneral() {
  return (
    <Document>
      <Page style={styles.body}>
        <Image style={styles.image} src="/images/safessl.png" />
        <Text style={styles.header} fixed>
          ~ Nome da empresa ~
        </Text>
        <Text style={styles.title}>
          Informações para assinatura de assistencia funeral
        </Text>
        <Text style={styles.subtitle}>Informações pessoais</Text>
        <Text style={styles.labelInput}>Nome</Text>
        <Text style={styles.formInput}>Rafael do carmo da silva</Text>
        <Text style={styles.labelInput}>CPF</Text>
        <Text style={styles.formInput}>138.487.627-81</Text>
        <Text style={styles.labelInput}>Data de Nascimento</Text>
        <Text style={styles.formInput}>13/05/1992</Text>
        <Text style={styles.labelInput}>Telefone</Text>
        <Text style={styles.formInput}>(21) 9 9554-0043</Text>
        <Text style={styles.labelInput}>E-mail</Text>
        <Text style={styles.formInput}>rafaelcarmo143@gmail.com</Text>
        <Text style={styles.labelInput}>Plano selecionado</Text>
        <Text style={styles.formInput}>
          18 a 39 anos - Plano Familiar - Valor - R$ 33,90
        </Text>
        <Text style={styles.labelInput}>Agregados / Dependentes</Text>
        <View style={styles.formInput}>
          <Text style={styles.agregado}>01 - 14 a 19 anos - R$ 5,90</Text>
          <Text>03 - 14 a 19 anos - R$ 17,90</Text>
        </View>
        <Text style={styles.subtitle}>Contrato</Text>
        <Text style={styles.text}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
      </Page>
    </Document>
  )
}

export function PdfView() {
  if (typeof window === 'undefined') return <>ssr</>
  return (
    <PDFViewer style={{ width: '100vw', height: '100vh' }}>
      <PdfFuneral />
    </PDFViewer>
  )
}

const ViewFile = () => {
  const [client, setClient] = useState(false)

  useEffect(() => {
    setClient(true)
  }, [])

  return client && <PdfFuneral />
}

// ReactPDF.render(<PdfFuneral />, `${__dirname}/pdf/file.pdf`)
