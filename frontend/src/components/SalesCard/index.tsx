
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";


import NotificationButton from "../NotificationButton";
import './style.css';

function SalesCard() {


    const min = new Date(new Date().setDate(new Date().getDate() - 365));
    const max = new Date();

    const [minDate, setMinDate] = useState(min);
    const [maxDate, setMaxDate] = useState(max);

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
                                <th>Venderdor</th>
                                <th className="show992">Visitas</th>
                                <th className="show992">Vendas</th>
                                <th>Total</th>
                                <th>Notificar</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td className="show992">0001</td>
                                <td className="show576">08/05/2022</td>
                                <td>Anakin</td>
                                <td className="show992">15</td>
                                <td className="show992">14</td>
                                <td>R$ 53.000,00</td>
                                <td>
                                    <div className="dsmeta-red-btn-container">
                                        <div className="dsmeta-red-btn">
                                            <NotificationButton />
                                        </div>
                                    </div>

                                </td>
                            </tr>


                            <tr>
                                <td className="show992">0001</td>
                                <td className="show576">08/05/2022</td>
                                <td>Anakin</td>
                                <td className="show992">15</td>
                                <td className="show992">14</td>
                                <td>R$ 53.000,00</td>
                                <td>
                                    <div className="dsmeta-red-btn-container">
                                        <div className="dsmeta-red-btn">
                                            <NotificationButton />
                                        </div>
                                    </div>

                                </td>
                            </tr>


                            <tr>
                                <td className="show992">0001</td>
                                <td className="show576">08/05/2022</td>
                                <td>Anakin</td>
                                <td className="show992">15</td>
                                <td className="show992">14</td>
                                <td>R$ 53.000,00</td>
                                <td>
                                    <div className="dsmeta-red-btn-container">
                                        <div className="dsmeta-red-btn">
                                            <NotificationButton />
                                        </div>
                                    </div>

                                </td>
                            </tr>





                        </tbody>
                    </table>
                </div>

            </div>

        </>

    )
}

export default SalesCard;
