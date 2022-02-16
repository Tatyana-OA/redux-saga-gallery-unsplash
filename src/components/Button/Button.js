import React from 'react'

const Button = ({ children, loading, ...props }) => {
    return (
        <button className="button" disabled={loading} {...props}>
            {loading ? "Loading..." : children}
        </button>
    )
}

export default Button;