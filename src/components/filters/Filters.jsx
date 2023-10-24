// import { useDispatch, useSelector } from 'react-redux';
// import { useState } from 'react';

// export function Filters() {
//     const dispatch = useDispatch();

//     const [orderFilter, setOrderFilter] = useState('');
//     const [continentFilter, setContinentFilter] = useState('');
//     const [loading, setLoading] = useState(true);


//     const handleSubmit = () => {
//         dispatch(deleteFilters())
//         setOrderFilter('NA')
//         setContinentFilter('all')
//     }

//     const filterChange = (e) => {
//         dispatch(filterContinents(e.target.value))
//         setContinentFilter(e.target.value)
//         if (orderFilter !== 'NA')
//             order(orderFilter)
//     }

//     const order = (e) => {
//         dispatch(orderCountries(e))
//     }

//     const orderChange = (e) => {
//         dispatch(orderCountries(e.target.value))
//         setOrderFilter(e.target.value)
//     }


//     return (
       
//     );
// }