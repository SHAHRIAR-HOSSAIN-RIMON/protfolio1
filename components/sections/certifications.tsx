'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Award, Calendar } from 'lucide-react'

const certifications = [
  {
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: '2023',
    badge: 'Professional',
    description: 'Advanced cloud architecture and deployment strategies',
  },
  {
    title: 'Google Cloud Professional Developer',
    issuer: 'Google Cloud',
    date: '2023',
    badge: 'Professional',
    description: 'Cloud-native application development and deployment',
  },
  {
    title: 'Meta Front-End Developer',
    issuer: 'Meta',
    date: '2022',
    badge: 'Professional',
    description: 'Advanced React, responsive design, and modern web development',
  },
  {
    title: 'MongoDB Certified Developer',
    issuer: 'MongoDB University',
    date: '2022',
    badge: 'Associate',
    description: 'NoSQL database design and optimization',
  },
  {
    title: 'Docker Certified Associate',
    issuer: 'Docker Inc.',
    date: '2022',
    badge: 'Associate',
    description: 'Container orchestration and deployment',
  },
  {
    title: 'Kubernetes Administrator',
    issuer: 'CNCF',
    date: '2023',
    badge: 'CKA',
    description: 'Container orchestration at scale',
  },
]

const awards = [
  {
    title: 'Best Innovation Award',
    event: 'TechFest 2023',
    description: 'For developing an AI-powered code review tool',
  },
  {
    title: 'Hackathon Winner',
    event: 'DevHacks 2023',
    description: 'Built a real-time collaboration platform in 48 hours',
  },
  {
    title: 'Open Source Contributor',
    event: 'GitHub Arctic Code Vault',
    description: 'Contributions preserved in the Arctic Code Vault',
  },
]

export function Certifications() {
  return (
    <section id="certifications" className="py-20 md:py-32 relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Certifications & <span className="gradient-text">Awards</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional certifications and recognition for excellence
          </p>
        </motion.div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8">Professional Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:border-primary transition-colors group">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Award className="w-6 h-6 text-primary" />
                      </div>
                      <Badge variant="secondary">{cert.badge}</Badge>
                    </div>
                    <CardTitle className="text-xl">{cert.title}</CardTitle>
                    <CardDescription>{cert.issuer}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">{cert.description}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{cert.date}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-8">Awards & Recognition</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:border-accent transition-colors">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                      <Award className="w-6 h-6 text-accent" />
                    </div>
                    <CardTitle>{award.title}</CardTitle>
                    <CardDescription>{award.event}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{award.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
