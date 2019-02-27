
# React
个人认为，React核心思想是万物皆是函数，一个入参，一个出参。入参既可以是传统的string、number、function，也可以是一个html或者css，或者是顶层的React组件。

## React定义组件

``` js
// Function and Class Components
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// ES6 class
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

## React 类型检查

``` js
// 单独的propTypes库
Buttons.propTypes = {
  index: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
  prevHandler: propTypes.func,
  nextHandler: propTypes.func
}
```

## React css in js

``` js
// className
var Button = React.createClass({
  // ...
  render () {
    var btnClass = 'btn';
    if (this.state.isPressed) btnClass += ' btn-pressed';
    else if (this.state.isHovered) btnClass += ' btn-over';
    return <button className={btnClass}>{this.props.label}</button>;
  }
});

// style
const divStyle = {
  color: 'blue',
  backgroundImage: 'url(' + imgUrl + ')',
};

function HelloWorldComponent() {
  return <div style={divStyle}>Hello World!</div>;
}
```
> 推荐[classnames](https://github.com/JedWatson/classnames)包配合

## React State
``` js
class ColorBox extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = { color: 'red' }
    // }
    // or
    state = { color: 'red' }

    getColor() {
        return this.state.color
    }

    render() {
        return <div>
            this is test - {this.getColor()}
        </div>
    }
}
```

## React-Router

``` js
// 从 react-router-dom 中导入它
// <Switch> 来启用排他路由
import { BrowserRouter, Route } from 'react-router-dom'

const PrimaryLayout = () => (
  <div className="primary-layout">
    <header>
      Our React Router 4 App
    </header>
    <main>
      <Route path="/" exact component={HomePage} />
      <Route path="/users" component={UsersPage} />
    </main>
  </div>
)

const HomePage =() => <div>Home Page</div>
const UsersPage = () => <div>Users Page</div>

const App = () => (
  <BrowserRouter>
    <PrimaryLayout />
  </BrowserRouter>
)

render(<App />, document.getElementById('root'))
```

``` js
import {Link} from 'react-router'

export default class Header extends React.Component {
   public render() {
       return (
        <div className="row">
          <nav className="navbar navbar-default">
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/members">Members</Link></li>
                </ul>
            </div>
          </nav>
        </div>
       );
  }
}
```

## React-Redux
``` js
// yarn add redux react-redux react-thunk

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';

// reducers - store - action

let store = createStore(
  reducers
  ,applyMiddleware(reduxThunk)
);

export default class App extends React.Component {
   public render() {
       return (
         <Provider store={store}>
            <div className="container-fluid">
              <Header/>
                {this.props.children}
              </div>
         </Provider>
       );
  }
}

```

``` js
// react-redux in page
const mapStateToProps = (state) => {
    return {
      member: state.member.member
      ,errors : state.member.errors
      ,saveCompleted : state.member.saveCompleted
    }
}


const mapDispatchToProps = (dispatch) => {
  return {
    loadMember: (id : number) => {return dispatch(loadMember(id))}
    ,fireFieldValueChanged: (fieldName : string, value : any) => {return dispatch(uiInputMember(fieldName, value))}
    ,saveMember: (member: MemberEntity) =>  {return dispatch(saveMember(member))}
    ,resetSaveCompletedFlag: () => {return dispatch(resetSaveCompleted())}
    ,initializeNewMember: () => {return dispatch(initializeNewMember())
    }
  }
}

const ContainerMemberPage = connect(
                                   mapStateToProps
                                  ,mapDispatchToProps
                                )(MemberPage)


export default ContainerMemberPage;
```