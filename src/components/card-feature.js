import React from 'react';


export default function CardFeatureItem({ title, subtitle, icon, borderColor }) {
    return (
        <div
            className={`card border-${borderColor}`}
                   >
            <h5 className="card-title">
                {title}
            </h5>
            <p className="card-subtitle">
                {subtitle}
            </p>
            <img className="card-icon" src={icon} alt={title} />
        </div>
    )
}