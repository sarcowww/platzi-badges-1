import React from 'react';
import header from '../images/platziconf-logo.svg';
import Badge from '../components/Badge'; //props
import BadgeForm from '../components/BadgeForm'
import PageLoading from '../components/PageLoading'
import './styles/BadgeEdit.css'
import Api from '../api'


class BadgeEdit extends React.Component{
    state = {
        loading: true,
        error: null,
        form:{
            firstName: '',
            lastName: '',
            email: '',
            avatarUrl: '',
            jobTitle: '',
            twitter: '',
        },
    };

    componentDidMount() {
        this.fetchData()
    }

    fetchData = async () => {
        this.setState({loading: true, error: null});

        try {
            const data = await Api.badges.read(
                this.props.match.params.badgeId
            )
            this.setState({loading: false, form: data});
        } catch (error) {
            this.setState({loading: true, error: error});
        }
    }
    handleChange = (e) =>{
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name] : e.target.value,
            }
        })
    }

    handleSubmit = async (e) =>{
        e.preventDefault();
        this.setState({loading: true, error: null})
        try { 
            await Api.badges.update(this.props.match.params.badgeId, this.state.form);
            this.setState({loading: false})
            this.props.history.push(`/badges/${this.props.match.params.badgeId}`);
        } catch (error) {
            this.setState({loading: false, error: error})
        }
    }

    render(){
        if(this.state.loading){
            return <PageLoading />;
        }
        return(
            <React.Fragment>
                <div className='BadgeEdit__hero'>
                    <img className='BadgeEdit__hero-img img-fluid' src={header} alt=""/>
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                        <Badge 
                        firstName={this.state.form.firstName || 'FIRST_NAME'}
                        lastName={this.state.form.lastName || 'LAST_NAME'}
                        email={this.state.form.email || 'EMAIL' }
                        avatarUrl=''
                        jobTitle={this.state.form.jobTitle || 'JOB_TITLE'}
                        twitter={this.state.form.twitter || 'TWITTER'}/>
                        </div>
                        <div className='col-6'>
                        <h1>Edit Attendant</h1>
                        <BadgeForm 
                        onChange={this.handleChange} 
                        onSubmit={this.handleSubmit} 
                        formValues={this.state.form}
                        error={this.state.error}
                        />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default BadgeEdit;