import {useContext, useEffect} from 'react';
import SkillContext from '../../context/SkillContext';

export const SkillCreate = () => {

    const { formValues, onChange, storeSkill, errors, setErrors } = useContext(SkillContext);
    useEffect(() => {
        setErrors({});
    }, []);

    return (
    <div className='mt-5 card'>
        <div className="card-body">
            <h4 className='mb-4'>Add new skill</h4>
            <form onSubmit={storeSkill}>
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
                <button type="submit" className="btn btn-primary mt-2">Submit</button>
            </form>
        </div>
    </div>
    )
}
