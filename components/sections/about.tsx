'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Code, Palette, Zap } from 'lucide-react'

const features = [
  {
    icon: Code,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable, and efficient code following best practices',
  },
  {
    icon: Palette,
    title: 'Creative Design',
    description: 'Crafting beautiful, intuitive interfaces with attention to detail',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Optimizing for speed, accessibility, and exceptional user experience',
  },
]

const skills = [
  'React', 'Next.js', 'TypeScript', 'JavaScript',
  'Tailwind CSS', 'Three.js', 'Framer Motion', 'GSAP',
  'Node.js', 'MongoDB', 'PostgreSQL', 'GraphQL',
  'Docker', 'AWS', 'Git', 'CI/CD'
]

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Transforming ideas into elegant solutions through code
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-30" />
              <div className="relative glass-card rounded-2xl p-8 h-[400px] flex items-center justify-center">
                <img
                  src="https://i.pravatar.cc/400?u=developer"
                  alt="Profile"
                  className="rounded-xl object-cover w-full h-full"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold">
              Hi, I'm <span className="gradient-text">Your Name</span>
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm a passionate software developer with 5+ years of experience in building modern web applications.
              I specialize in creating exceptional user experiences using cutting-edge technologies and design principles.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              My expertise spans across frontend development, 3D graphics, animations, and performance optimization.
              I love tackling complex problems and turning them into simple, beautiful, and intuitive solutions.
            </p>
            <div className="flex flex-wrap gap-2 pt-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Badge variant="secondary" className="px-3 py-1">
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 hover:border-primary transition-colors h-full">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
