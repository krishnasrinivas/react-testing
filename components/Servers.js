import React from 'react';

import ClearContent from 'material-ui/lib/svg-icons/content/clear'
import IconButton from 'material-ui/lib/icon-button'
import TextField from 'material-ui/lib/text-field'
import FlatButton from 'material-ui/lib/flat-button'
import List from 'material-ui/lib/lists/list'
import ListItem from 'material-ui/lib/lists/list-item'
import Table from 'material-ui/lib/table/table'
import TableBody from 'material-ui/lib/table/table-body'
import TableRow from 'material-ui/lib/table/table-row'
import TableRowColumn from 'material-ui/lib/table/table-row-column'
import TableHeader from 'material-ui/lib/table/table-header'
import TableHeaderColumn from 'material-ui/lib/table/table-header-column'

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

class Servers extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		  servers:['one', 'two', 'three']
		}
		this.onClick = this.onClick.bind(this);
		this.onsubmit = this.onsubmit.bind(this);
	}
	onsubmit(e) {
		e.preventDefault();
		if (!this.refs.newserver.getValue())
			return;
		this.setState({state: this.state.servers.push(this.refs.newserver.getValue())});
		this.refs.newserver.setValue('')
	}
	onClick() {
		this.context.router.transitionTo('/');
	}
	render() {
		// console.log(this.state.servers);
		// return (
		//         <ReactCSSTransitionGroup transitionName="servers" transitionAppear={true} transitionLeave={false}>
		// 		<div style={{position:'relative', backgroundColor: 'white', minHeight:window.innerHeight - 60 + "px", padding: '30px'}}>
		// 	        <h2 style={{textAlign:'center'}}>Servers</h2>
		// 			<IconButton style={{position:'absolute', right:'0', top:'0'}} onClick={this.onClick}>
		// 				<ClearContent />
		// 			</IconButton>
		// 			<div className="row center-xs">
		// 				<div className="col-xs-6">
		// 					<form onSubmit={this.onsubmit}>
		// 						<TextField
		// 						ref="newserver"
		// 						type="text" />
		// 						<FlatButton label="Add" type="submit" />
		// 					</form>
		// 				</div>
		// 				<div className="col-xs-12"></div>
		// 				<div className="col-xs-6">
		// 					<List>
		// 						{this.state.servers.map(function(server, i) {
		// 							return <ListItem key={i} primaryText={server} />
		// 						})}
		// 					</List>
		// 				</div>
		// 			</div>
		// 		</div>
		//         </ReactCSSTransitionGroup>
		// );

		return (
		        <ReactCSSTransitionGroup transitionName="servers" transitionAppear={true} transitionLeave={false}>
				<div style={{position:'relative', backgroundColor: 'white', minHeight:window.innerHeight - 60 + "px", padding: '30px'}}>
			        <h2 style={{textAlign:'center'}}>Servers</h2>
					<IconButton style={{position:'absolute', right:'0', top:'0'}} onClick={this.onClick}>
						<ClearContent />
					</IconButton>
					<div className="row center-xs">
						<div className="col-xs-6">
							<form onSubmit={this.onsubmit}>
								<TextField
								ref="newserver"
								type="text" />
								<FlatButton label="Add" type="submit" />
							</form>
						</div>
						<div className="col-xs-12"></div>
						<div className="col-xs-6">
							<Table>
								<TableHeader>
									<TableRow>
										<TableHeaderColumn>
											Servers List
										</TableHeaderColumn>
									</TableRow>
								</TableHeader>
								<TableBody showRowHover={true}>
									{this.state.servers.map(function(server, i) {
										return (
											<TableRow key={i} style={{cursor:'pointer'}}>
												<TableRowColumn>
													{server}
												</TableRowColumn>
											</TableRow>
										)
									})}
								</TableBody>
							</Table>
						</div>
					</div>
				</div>
		        </ReactCSSTransitionGroup>
		);

	}
}


Servers.contextTypes = {
						router: React.PropTypes.func.isRequired
					}


export default Servers;
