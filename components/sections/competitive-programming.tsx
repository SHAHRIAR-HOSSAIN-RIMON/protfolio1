'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink } from 'lucide-react'

const platforms = [
  {
    name: 'LeetCode',
    rating: '2150',
    rank: 'Knight',
    problems: '500+',
    badge: 'Top 5%',
    color: 'from-orange-500 to-yellow-500',
    link: 'https://leetcode.com',
  },
  {
    name: 'Codeforces',
    rating: '1850',
    rank: 'Expert',
    problems: '300+',
    badge: 'Div 2',
    color: 'from-blue-500 to-cyan-500',
    link: 'https://codeforces.com',
  },
  {
    name: 'CodeChef',
    rating: '2000',
    rank: '4★',
    problems: '250+',
    badge: 'Division 2',
    color: 'from-purple-500 to-pink-500',
    link: 'https://codechef.com',
  },
]

const achievements = [
  'Google Code Jam 2023 - Round 2 Qualifier',
  'Meta Hacker Cup - Top 500',
  'LeetCode Weekly Contest - 5x Top 100',
  'Solved 1000+ problems across platforms',
]

export function CompetitiveProgramming() {
  return (
    <section id="competitive" className="py-20 md:py-32 relative bg-muted/20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Competitive <span className="gradient-text">Programming</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Solving complex algorithmic challenges and competing globally
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="relative overflow-hidden group hover:border-primary transition-colors">
                <div className={`absolute inset-0 bg-gradient-to-br ${platform.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-2xl">{platform.name}</CardTitle>
                    <Badge className={`bg-gradient-to-r ${platform.color} border-0 text-white`}>
                      {platform.badge}
                    </Badge>
                  </div>
                  <CardDescription>Rank: {platform.rank}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Rating</p>
                      <p className="text-3xl font-bold gradient-text">{platform.rating}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Problems Solved</p>
                      <p className="text-2xl font-semibold">{platform.problems}</p>
                    </div>
                    <Button variant="outline" className="w-full" asChild>
                      <a href={platform.link} target="_blank" rel="noopener noreferrer">
                        View Profile
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Notable Achievements</CardTitle>
              <CardDescription>Highlights from competitive programming journey</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {achievements.map((achievement, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground">{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
