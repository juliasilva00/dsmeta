
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from "react";


import NotificationButton from "../NotificationButton";
import './style.css';
import axios from "axios";
import { BASE_URL } from "../../utils/request";
import { Sale } from "../../models/sale";

function SalesCard() {


    const min = new Date(new Date().setDate(new Date().getDate() - 365));
    const max = new Date();

    const [minDate, setMinDate] = useState(min);
    const [maxDate, setMaxDate] = useState(max);

    const [sales, setSales] = useState<Sale[]>([]);

    useEffect( () => {

        const dmin = minDate.toISOString().slice(0,10);
        const dmax = maxDate.toISOString().slice(0,10);


        axios.get(`${BASE_URL}/sales?minDate=${dmin}&maxDate=${dmax}`).then(response => {
            setSales(response.data.content)
        })
    }, [minDate,maxDate]);
    //quando colocamos algun valor na chave da linha 34 falamos para o useEffect rodas novamente quando esses valores mudarem

    return (
        <>

            <div className="dsmeta-card">
                <h2 className="dsmeta-sales-title">Vendas</h2>

                <div>
                    <div className="dsmeta-form-control-container">
                        <DatePicker
                        //o resultado visual de um componente é consequencia do dado que está no componente
                        //se quiser mudar o visual precisamos mudar o dado, mudando o dado o motor do react vai identificar isso e alterar o visual com o novo dado
                        //REACT HOOK - A forma correta de manter o estado de um componente é usando o reack hook (gancho/atrelado)
                            selected={minDate}
                            onChange={(date: Date) => {setMinDate(date) }}
                            className="dsmeta-form-control"
                            dateFormat="dd/MM/yyyy"
                        />
                    </div>
                </div>

                <div>
                    <div className="dsmeta-form-control-container">
                        <DatePicker
                            selected={maxDate}
                            onChange={(date: Date) => { setMaxDate(date)}}
                            className="dsmeta-form-control"
                            dateFormat="dd/MM/yyyy"
                        />
                    </div>
                </div>

                <div>
                    <table className="dsmeta-sales-table">
                        <thead>
                            <tr>
                                <th className="show992">ID</th>
                                <th className="show576">Data</th>
                                <th>Vendedor</th>
                                <th className="show992">Visitas</th>
                                <th className="show992">Vendas</th>
                                <th>Total</th>
                                <th>Notificar</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                sales.map(sale => {
                                    return (
                                        <tr key={sale.id}>
                                        <td className="show992">{sale.id}</td>
                                        <td className="show576">{new Date(sale.date).toLocaleDateString()}</td>
                                        <td>{sale.sellerName}</td>
                                        <td className="show992">{sale.visited}</td>
                                        <td className="show992">{sale.deals}</td>
                                        <td>{sale.amount.toFixed(2)}</td>
                                        <td>
                                            <div className="dsmeta-red-btn-container">
                                                <div className="dsmeta-red-btn">
                                                    <NotificationButton saleId={sale.id} />
                                                </div>
                                            </div>
        
                                        </td>
                                    </tr>
        
                                    )
                                })
                            }
                           
                        </tbody>
                    </table>
                </div>

            </div>

        </>

    )
}

export default SalesCard;
