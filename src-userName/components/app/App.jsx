import React, {Component} from 'react'
import PropTypes from 'prop-types'

import CommentAdd from '../comment-add/Comment-add'
import CommentList from '../comment-list/Comment-list'

export default class App extends Component{

    /*constructor(props){
        super(props)
        this.state = {
            comments : [
                {userName : 'TOM',content:'React挺好的。。。'},
                {userName : 'Jack ',content:'React太难了。。。'}
            ]
        }
    }*/

    static propTypes = {
        addComment:PropTypes.func.isRequired
    }
    state = {
        comments:[
            {userName:'tom', content:'React挺好的'},
            {userName:'Jack', content:'React太难了'}
        ]
    }

    addComment = (comment)=>{
        const {comments} = this.state
        comments.unshift(comment)
        this.setState({comments})
    }

    deleteComment = (index) => {
       const {comments} = this.state
       comments.splice(index,1)
       this.setState({comments})
    }

    render(){
        const {comments,deleteComment} = this.state
        return(
            <div>
                <header className="site-header jumbotron">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <h1>请发表对React的评论</h1>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="container">

                    <CommentAdd addComment={this.addComment}/>
                    <CommentList comments= {comments} deleteComment={this.deleteComment}/>

                </div>
            </div>
        )
    }
}