import React, { Component } from 'react';

export const Post = ({ id, text, clickDelete, clickEdit }) => {
    return (
        <tr>
            <td scope="row">{id}</td>
            <td>{text}</td>
            <td>
                <button className="btn btn-success" onClick={clickDelete}>Delete</button>
                <button className="btn btn-danger" onClick={clickEdit}>Edit</button>
            </td>
        </tr>
    );
}