
import { type RecordWindowData } from '@/models'
import { RecordingWindowWrap } from './components'
import { RecorderProvider, RecorderWindowProvider } from './services/context'

const NuevoComponente = () => {
  const estiloComponente = {
    padding: '10px', // Intenta poner el padding que te sea de tu gusto.
    margin: '16px', // Pon aqui el margen que mas se ajuste a tus intereses.
    // Otros estilos aquí
  };

interface RecordWindowProps {
  windowData: RecordWindowData
}

export const RecordingWindow: React.FC<RecordWindowProps> = ({ windowData }) => {
  return (
    <RecorderWindowProvider style={estiloComponente} {...{ windowData }}>
      <RecorderProvider>
        <RecordingWindowWrap
          {...{ windowData }}
        />
      </RecorderProvider>
    </RecorderWindowProvider>
  )
}

export default RecordingWindow
