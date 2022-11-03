import {useContext, useEffect} from 'react';
import SkillContext from '../../context/SkillContext';
import { useParams } from 'react-router-dom';

export const SkillEdit = () => {

    const { formValues, onChange, errors, setErrors, skill, getSkill, updateSkill } = useContext(SkillContext);
    let {id} = useParams();

    useEffect(() => {
        getSkill(id);
        setErrors({});
    }, [])

    return (
    <div className='mt-5 card'>
        <div className="card-body">
            <h4 className='mb-4'>Update skill</h4>
            <form onSubmit={updateSkill}>   
                <div className="form-group mb-2">
                    <label htmlFor="skillName">Skill Name<span className='text-danger'>*</span></label>
                    <input name='name' value={formValues['name']} onChange={onChange} type="text" className="form-control" id="skillName" placeholder="Skill Name" required />
                    {errors.name && <span className='text-small text-danger'>{errors.name[0]}</span>}
                </div>
                <div className="form-group mb-2">
                    <label htmlFor="skillSlug">Slug<span className='text-danger'>*</span></label>
                    <input name='slug' value={formValues['slug']} onChange={onChange} type="text" className="form-control" id="skillSlug" placeholder="Skill Name slug" required />
                    {errors.slug && <span className='text-small text-danger'>{errors.slug[0]}</span>}
                </div>
                <button type="submit" className="btn btn-success mt-2">Update</button>
            </form>
        </div>
    </div>
    )
}
