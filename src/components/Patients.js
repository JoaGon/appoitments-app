import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Patients = ({appoitments}) => {

    return (
        <Fragment>
            <h1 className="my-5">Administrador de Pacientes</h1>

            <div className="container mt-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5 d-flex justify-content-center">
                        <Link to={'/newAppoitment'} className="btn btn-success text-uppercase py-2 px-5 font-weight-bold">Crear Cita</Link>
                    </div>

                    <div className="col-md-8 mx-auto">
                        <div className="list-group">
                            {appoitments.map(appoitment => (
                                <Link to={`/appoitment/${appoitment._id}`} key={appoitment._id} className="p-5 list-group-item list-group-item-action flex-column align-items-start">
                                    <div className="d-flex w-100 justify-content-between mb-4">
                                        <h3 className="mb-3">{appoitment.nombre}</h3>
                                        <small className="fecha-alta">
                                            {appoitment.fecha} - {appoitment.hora}
                                        </small>
                                    </div>

                                    <p className="mb-0">
                                        {appoitment.sintomas}
                                    </p>
                                    <div className="contacto py-3">
                                        <p>Dueño: {appoitment.propietario}</p>
                                        <p>Teléfono: {appoitment.telefono}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

            </div>

        </Fragment>

    );
}

export default Patients;