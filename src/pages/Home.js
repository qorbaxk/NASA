import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { nasaAction } from '../redux/actions/nasaAction';

const Home = () => {

    const dispatch = useDispatch();
    
    useEffect(() => {
      dispatch(nasaAction.getImg());
    }, [])
    


  return (
    <div>
        홈홈
    </div>
  )
}

export default Home