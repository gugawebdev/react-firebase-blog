import database from '../config/config'



export const fetchDataSuccess = (data) =>{
    return {
        type:'FETCH_DATA_SUCCESS',
        data:data
    }
}

export const fetchDataError = () =>{
    return{
        type:'FETCH_DATA_ERROR',
        error:'Was not possible load the data.'
    }
}



export const deleteData = (id) =>{
    return{
        type:'DELETE_DATA_SUCCESS',
        id:id
    }
}



export const deleteDataError = (err) =>{
    return {
        type:'DELETE_DATA_ERROR',
        error:err
    }
}

export const updateDataError = (err) =>{
    return{
        type:'UPDATE_DATA_ERROR',
        error:err
    }
}

export const updateDataSuccess = () => {
    return{
        type:'UPDATE_DATA_SUCCESS',
        success:'UPDATED SUCCESFULLY'
    }
}

export const insertDataSuccess = (data) =>{
    return{
        type:'INSERT_DATA_SUCCESS',
        data:data
    }
}



export const insertDataListener = (post) => dispatch =>{

    database.push(post).then((data)=>{
        dispatch(insertDataSuccess(post))
    }).catch(err=>{
        console.log(err)
    })
}

export const fetchDataListener = () => dispatch =>{
    let data = []
    // database.on('value', snapshot => {
    //     // dispatch(fetchDataSuccess(snapshot.val()))
    //     snapshot.forEach(snap=>{
    //         data.push({id:snap.key, title:snap.val().title, content: snap.val().content})
    //     })

    //     dispatch(fetchDataSuccess(data))
    // }, err =>{
    //     dispatch(fetchDataError(err))
    //     console.log(err)
    // })

    database.once('value').then(snap=>{
        snap.forEach( n =>{
            data.push({id:n.key, title:n.val().title,content:n.val().content})
        })

        dispatch(fetchDataSuccess(data))
    }).catch(err=>{
        console.log(err)
    })
}


export const deleteDataListener = (key) => dispatch =>{
    database.remove(key).then(()=>{
        dispatch(deleteData(key))
    }).catch(err=>{
        dispatch(deleteDataError(err))
        console.log(err)
    })
}


export const updateDataListener = (key, updateData) => dispatch =>{
    database.child('posts/' + key).update(updateData).then(()=>{
        console.log('Data updated succesfully!')
    }).catch( err => {
        dispatch(updateDataError(err))
        console.log(err)
    }) 
}

export const getPostData = (key) =>{
        database.child('posts/' + key).on('value', snap=>{
            return snap.val()
        }, err=>{
            console.log('Error while loading single post DATA. Error:' + err)
        })
}




