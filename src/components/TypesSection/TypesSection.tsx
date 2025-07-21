import './TypesSection.scss';

export const TypesSection = () => {
    return (
        <>
        <div className="types">
        <h1 className="main-title">SO WHAT DO YOU NEED?</h1>
        
        <div className="services-list">
            <div className="service-item">
                <div className="service-number">01</div>
                <div className="service-content">
                    <div className="service-category">Selection of processed photographs in an artistic style</div>
                    <div className="service-title">PERSONAL PHOTOSHOOT</div>
                    <div className="service-description">Individual portrait sessions,<br/>artistic projects, creation of visual concepts</div>
                </div>
                <div className="service-icon">
                    <svg viewBox="0 0 24 24">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                        <circle cx="9" cy="9" r="2"/>
                        <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
                    </svg>
                </div>
            </div>
            
            <div className="service-item">
                <div className="service-number">02</div>
                <div className="service-content">
                    <div className="service-category">Content for marketing and corporate projects</div>
                    <div className="service-title">COMMERCIAL PHOTOGRAPHY</div>
                    <div className="service-description">Product shoots, employee photos, interior shots,<br/>images for marketing purposes</div>
                </div>
                <div className="service-icon">
                    <svg viewBox="0 0 24 24">
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                    </svg>
                </div>
            </div>
            
            <div className="service-item">
                <div className="service-number">03</div>
                <div className="service-content">
                    <div className="service-category">Professional photos in just a few minutes</div>
                    <div className="service-title">DOCUMENT PHOTOS</div>
                    <div className="service-description">Formal photos for passport, resume,<br/>natural retouching without changing appearance</div>
                </div>
                <div className="service-icon">
                    <svg viewBox="0 0 24 24">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                        <polyline points="14,2 14,8 20,8"/>
                        <line x1="16" y1="13" x2="8" y2="13"/>
                        <line x1="16" y1="17" x2="8" y2="17"/>
                        <polyline points="10,9 9,9 8,9"/>
                    </svg>
                </div>
            </div>
            
            <div className="service-item">
                <div className="service-number">04</div>
                <div className="service-content">
                    <div className="service-category">Delicate retouching for a flawless result</div>
                    <div className="service-title">PROFESSIONAL EDITING</div>
                    <div className="service-description">Editing of finished photos: color correction,<br/>defect removal, artistic stylization</div>
                </div>
                <div className="service-icon">
                    <svg viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}