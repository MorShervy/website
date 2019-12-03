import React from 'react';
import body from './Body';
import footer from './Footer';

function TopBackround() {


    return (
        <div className="Top-background">

            {body}
            {footer}
        </div>
    )
}
const topBackround = <div>
    <TopBackround />
</div>

export default topBackround;