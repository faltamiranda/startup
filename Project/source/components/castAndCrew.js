import {addMovie, editMovie, deleteMovie, initialize} from '../applications/actions';
import React from 'react';
import store from '../applications/store';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

class CastAndCrew extends React.Component{
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <Table>
                    <TableHeader adjustForCheckbox={false} displaySelectAll={false} >
                        <TableRow>
                            <TableHeaderColumn>Name</TableHeaderColumn>
                            <TableHeaderColumn>Character</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {this.props.cast.map( (cast, index) => (
                            <TableRow>
                                <TableRowColumn>{cast.person.name}</TableRowColumn>
                                <TableRowColumn>{cast.character.name}</TableRowColumn>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

        )
    }
    
}

export default CastAndCrew
