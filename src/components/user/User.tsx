import { useEffect, useState } from 'react';

interface Prop {
    userName: string;
}

function User({ userName }: Prop) {
    if (!userName) return null;

    return <>{<div className="p-3 h_user">Welcome ( {userName} )</div>}</>;
}

export default User;
