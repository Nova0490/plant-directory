import styles from './AddPlantButton.module.css';
import {useDrawer} from '../../../../../hooks/useDrawer.ts'
import {Drawer} from '../../Drawer/Drawer.tsx'
import NewPlantForm from '../../newPlantForm/newPlantForm.tsx';
const AddPlantButton = () => {
  const drawer = useDrawer();
  return (
    <>
    <button className={styles.buttonAddPlant} onClick={drawer.open}>Добавить растение</button>
      <Drawer
        isOpen={drawer.isOpen}
        onClose={drawer.close}
        title="Новое растение"
      >
        <NewPlantForm/>
      </Drawer>

</>
  )
}

export default AddPlantButton