var React = require('react');

var SearchAppointments = React.createClass({

  isOrderBy: function (item) {
    return (this.props.orderBy === item) ? <span className="glyphicon glyphicon-ok"></span> : null
  },

  isOrderDir: function (item) {
    return (this.props.orderDir === item) ? <span className="glyphicon glyphicon-ok"></span> : null
  },
  
  handleSort: function (ev) {
    this.props.onReOrder(ev.target.id, this.props.orderDir)
  },

  handleOrder: function (ev) {
    this.props.onReOrder(this.props.orderBy, ev.target.id)
  },

  handleSearch: function(ev) {
    this.props.onSearch(ev.target.value)
  },

  render: function() {

    return (
      <div className="row search-appointments">
        <div className="col-sm-offset-3 col-sm-6">
          <div className="input-group">
            <input id="SearchApts" onChange={this.handleSearch} placeholder="Search" type="text" className="form-control" aria-label="Search Appointments" />
              <div className="input-group-btn">
                <button type="button" className="btn btn-primary dropdown-toggle"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sort by: <span className="caret"></span></button>
                <ul className="dropdown-menu dropdown-menu-right">
                  <li><a href="#" id="petName" onClick={this.handleSort}>Pet Name { this.isOrderBy('petName') } </a></li>
                  <li><a href="#" id="aptDate" onClick={this.handleSort}>Date { this.isOrderBy('aptDate') }</a></li>
                  <li><a href="#" id="ownerName" onClick={this.handleSort}>Owner { this.isOrderBy('ownerName') }</a></li>
                  <li role="separator" className="divider"></li>
                  <li><a href="#" id="asc" onClick={this.handleOrder}>Asc { this.isOrderDir('asc') }</a></li>
                  <li><a href="#" id="desc" onClick={this.handleOrder}>Desc { this.isOrderDir('desc') }</a></li>
                </ul>
              </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = SearchAppointments;