'use client'

import React, { useEffect, useState, useRef } from 'react'
import { Card, CardContent } from '@/components/ui/card'


const formatTime = (seconds: number) => {
    const mins = String(Math.floor(seconds / 60)).padStart(2, '0')
    const secs = String(seconds % 60).padStart(2, '0')
    return `${mins}:${secs}`
}

export default function TimerComponent() {
    const [seconds, setSeconds] = useState(15)
    const intervalRef = useRef<NodeJS.Timeout | null>(null)

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setSeconds((prev) => prev - 1)
        }, 1000)

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current)
        }
    }, [])


    return (
        <Card className="w-full max-w-sm mx-auto shadow-lg rounded-lg p-4 px-6">
            <div className="text-3xl font-mono tracking-widest">{formatTime(seconds)}</div>
        </Card>
    )
}
