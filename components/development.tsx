"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { developmentApproaches } from "@/lib/constants";

export function Development() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="w-20 h-1 bg-orange-500 mx-auto mb-4"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <div className="space-y-2">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Our design and</h2>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Development Approach</h2>
          </div>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {developmentApproaches.map((approach, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
            >
              <Card className="border-none shadow-sm hover:shadow-md transition-all duration-300 h-full">
                <CardContent className="flex flex-col sm:flex-row items-start gap-4 p-6">
                  <motion.div
                    className="p-2 bg-white rounded-lg shadow-sm"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {approach.icon}
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-lg lg:text-xl mb-2">{approach.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                      {approach.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

