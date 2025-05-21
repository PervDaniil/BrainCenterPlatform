import { motion } from "framer-motion";


export default function WelcomeSection({ user }: { user: any}) {
    return (
        <div className="container mx-auto px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
            >
                <h1 className="text-3xl font-bold mb-2">
                    Welcome back, {user?.displayName}!
                </h1>
                <p className="text-muted-foreground">
                    Track your progress, manage your courses, and continue your learning journey.
                </p>
            </motion.div>
        </div>
    )
}